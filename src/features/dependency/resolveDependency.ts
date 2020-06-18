/* eslint-disable no-param-reassign */
import { createNextState as produce } from '@reduxjs/toolkit';
import {
  DependencyChecksState,
  InvertDependencyChecksState,
} from './dependencyCheckSlice';
import StepNodeRecord from './StepNodeRecord';
import DependencyQueue from './DependencyQueue';
import { Dependency, StepNode } from './types';
import isIncludedInDependencyArray from './isIncludedInDependencyArray';

interface ResolveAllDependencyArgs {
  dependencyChecks: DependencyChecksState;
  types: string[];
  invertDependencyChecks?: InvertDependencyChecksState;
}

const initiateInvertDependency = ({
  invertDependencyChecks,
  stepId,
  type,
}: {
  invertDependencyChecks: InvertDependencyChecksState;
  stepId: string;
  type: string;
}) => {
  if (!invertDependencyChecks[type]) {
    invertDependencyChecks[type] = {};
  }
  if (!invertDependencyChecks[type][stepId]) {
    invertDependencyChecks[type][stepId] = { dependencyCheckList: [] };
  }
};

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

const insertNodeIntoInvertDependencyChecks = ({
  node,
  currentNode,
  invertDependencyChecks,
}: {
  node: Dependency;
  currentNode: StepNode;
  invertDependencyChecks: InvertDependencyChecksState;
}) => {
  // construct invert dependency node
  const invertDependency: Dependency = {
    stepId: currentNode.stepId,
    type: currentNode.scriptType,
    choice: node.choice,
  };
  // initiate state for the node if not initiated
  initiateInvertDependency({ invertDependencyChecks, ...node });

  // insert the invert dependency node only if not existed
  // in the node's invert dependency check list
  const invertDependencyCheckList =
    invertDependencyChecks[node.type][node.stepId].dependencyCheckList;
  if (
    !isIncludedInDependencyArray({
      dependency: invertDependency,
      array: invertDependencyCheckList,
    })
  ) {
    invertDependencyCheckList.push(invertDependency);
  }
};

const insertNodeIntoDependencyCheckListFactory = ({
  index,
  dependencyCheckList,
  currentNode,
  invertDependencyChecks,
}: {
  index: number;
  dependencyCheckList: Dependency[];
  currentNode: StepNode;
  invertDependencyChecks: InvertDependencyChecksState;
}) => (node: Dependency) => {
  // insert dependency node only if not existed
  if (
    !isIncludedInDependencyArray({
      dependency: node,
      array: dependencyCheckList,
    })
  ) {
    dependencyCheckList.splice(index, 0, node);
  }
  insertNodeIntoInvertDependencyChecks({
    node,
    currentNode,
    invertDependencyChecks,
  });
};

export const resolveAllDependency = ({
  dependencyChecks,
  types,
  invertDependencyChecks = {},
}: ResolveAllDependencyArgs) =>
  produce({ dependencyChecks, invertDependencyChecks }, (draft) => {
    if (!types.length) {
      return draft;
    }

    const {
      dependencyChecks: draftDependencyChecks,
      invertDependencyChecks: draftInvertDependencyChecks,
    } = draft;

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
                    insertNodeIntoDependencyCheckListFactory({
                      index: i,
                      dependencyCheckList,
                      currentNode: nodeToCheck,
                      invertDependencyChecks: draftInvertDependencyChecks,
                    })
                  );

                  // insert the current nodeToReplace again if not exists
                  insertNodeIntoDependencyCheckListFactory({
                    index: i,
                    dependencyCheckList,
                    currentNode: nodeToCheck,
                    invertDependencyChecks: draftInvertDependencyChecks,
                  })(nodeToReplace);
                } else {
                  insertNodeIntoInvertDependencyChecks({
                    node: dependencyCheckList[i],
                    currentNode: nodeToCheck,
                    invertDependencyChecks,
                  });
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

    return draft;
  });

export const resolveDependency = () => {};
