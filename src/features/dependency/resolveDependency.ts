/* eslint-disable no-param-reassign */
import { createNextState as produce } from '@reduxjs/toolkit';
import { DependencyChecksState } from './dependencyCheckSlice';
import StepNodeRecord from './StepNodeRecord';
import DependencyQueue from './DependencyQueue';
import { Dependency } from './dependencyCheckEntity';
import isIncludedInDependencyArray from './isIncludedInDependencyArray';

interface ResolveAllDependencyArgs {
  dependencyChecks: DependencyChecksState;
  types: string[];
}

const addNodeToQueueFactory = ({
  queue,
  defaultType,
}: {
  queue: DependencyQueue;
  defaultType: string;
}) => (node: Dependency) => {
  // add default dependency's scriptType if not existed
  node.type = node.type || defaultType;
  // construct nextNode
  const nextNode = {
    scriptType: node.type,
    stepId: node.stepId,
  };

  if (queue.includes(nextNode)) {
    // if nextNode is met in the queue before,
    // it means there's circular dependency
    throw new Error('circular dependency detected');
  } else {
    // nextNode is safe to add to queue
    queue.push(nextNode);
  }
};

const insertNodeIntoDependencyArrayFactory = ({
  index,
  dependencyArray,
}: {
  index: number;
  dependencyArray: Dependency[];
}) => (node: Dependency) => {
  // insert dependency node only if not existed
  if (!isIncludedInDependencyArray(node, dependencyArray)) {
    dependencyArray.splice(index, 0, node);
  }
};

export const resolveAllDependency = ({
  dependencyChecks,
  types,
}: ResolveAllDependencyArgs) =>
  produce(dependencyChecks, (draftDependencyChecks) => {
    if (!types.length) {
      return draftDependencyChecks;
    }
    const resolved = new StepNodeRecord();
    const seen = new StepNodeRecord();

    Object.keys(draftDependencyChecks).forEach((scriptType) => {
      // loop through each scriptType
      draftDependencyChecks[scriptType].ids.forEach((id) => {
        // loop through each dependency element in each scriptType
        const stepId = id.toString();
        // initiate queue
        const queue = new DependencyQueue({ scriptType, stepId });

        // declare function to add a node to queue
        // use first scriptType as default type
        const addNodeToQueue = addNodeToQueueFactory({
          queue,
          defaultType: types[0],
        });

        while (queue.length) {
          // make sure processing every node in queue

          // current pointer node
          const nodeToCheck = queue[queue.length - 1];
          // find the current node in the state
          const stepToUpdate =
            draftDependencyChecks[nodeToCheck.scriptType].entities[
              nodeToCheck.stepId
            ];
          if (resolved.includes(nodeToCheck)) {
            // if current node is resolved

            queue.pop();
          } else if (stepToUpdate) {
            // current node still have dependency to resolve
            if (!seen.includes(nodeToCheck)) {
              // if current node not seen before
              // initiate current node's dependency array
              stepToUpdate.dependencyCheckList = [...stepToUpdate.dependency];
              // add current node to seen
              seen.add(nodeToCheck);

              // add all dependent node to queue
              stepToUpdate.dependency.forEach(addNodeToQueue);
            } else {
              // current node has been seen before
              // it implies that current node have all nodes in dependency resolved
              const { dependencyCheckList = [] } = stepToUpdate;
              for (let i = dependencyCheckList.length - 1; i >= 0; i -= 1) {
                // loop through every node in current dependency check list from the end

                // step that corresponds to current node to replace
                const stepToReplace =
                  draftDependencyChecks[dependencyCheckList[i].type || '']
                    ?.entities[dependencyCheckList[i].stepId];
                if (stepToReplace) {
                  // if stepToReplace exists
                  // it means the stepToReplace has dependencyCheckList to replace

                  // remove the current nodeToReplace first
                  const nodeToReplace = dependencyCheckList.splice(i, 1)[0];

                  // copy stepToReplace's dependencyCheckList to stepToUpdate's dependencyCheckList
                  // without duplicated nodes
                  // eslint-disable-next-line no-unused-expressions
                  stepToReplace.dependencyCheckList?.forEach(
                    insertNodeIntoDependencyArrayFactory({
                      index: i,
                      dependencyArray: dependencyCheckList,
                    })
                  );

                  // insert the current nodeToReplace again if not exists
                  if (
                    !isIncludedInDependencyArray(
                      nodeToReplace,
                      dependencyCheckList
                    )
                  ) {
                    dependencyCheckList.splice(i, 0, nodeToReplace);
                  }
                }
              }

              resolved.add(nodeToCheck);
              queue.pop();
            }
          } else {
            // current node does not have any dependency
            resolved.add(nodeToCheck);
            queue.pop();
          }
        }
      });
    });

    return draftDependencyChecks;
  });

export const resolveDependency = () => {};
