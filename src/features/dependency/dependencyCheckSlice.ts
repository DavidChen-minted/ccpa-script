/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dependencyCheckAdapter, {
  Dependency,
  DependencyCheckEntityState,
} from './dependencyCheckEntity';
import StepNodeRecord from './StepNodeRecord';
import DependencyQueue from './DependencyQueue';
import isIncludedInDependencyArray from './isIncludedInDependencyArray';
import importToDependencyChecksState, {
  ImportToDependencyChecksStateArgs,
} from './importToDependencyChecksState';

export interface DependencyChecksState {
  [key: string]: DependencyCheckEntityState;
}

export interface DependencyCheckState {
  dependencyChecks: DependencyChecksState;
}

const dependencyCheckSlice = createSlice({
  name: 'dependencyCheck',
  initialState: {
    dependencyChecks: {},
  } as DependencyCheckState,
  reducers: {
    dependencyCheckReceived: (
      state,
      action: PayloadAction<DependencyCheckState | undefined>
    ) => {
      if (!action.payload) {
        return state;
      }
      return action.payload;
    },
    importRawDependencyChecks: (
      state,
      action: PayloadAction<ImportToDependencyChecksStateArgs>
    ) => {
      const dependencyChecks = importToDependencyChecksState(action.payload);
      if (dependencyChecks) {
        state.dependencyChecks = dependencyChecks;
      }
      return state;
    },
    updateDependencyCheckList: (
      state,
      action: PayloadAction<{
        id: string;
        scriptType: string;
        dependencyCheckList: Dependency[];
      }>
    ) => {
      const { id, scriptType, dependencyCheckList } = action.payload;
      if (id && scriptType) {
        dependencyCheckAdapter.updateOne(state.dependencyChecks[scriptType], {
          id,
          changes: { dependencyCheckList },
        });
      }
    },
    resolveAllDependency: (state, action: PayloadAction<string[]>) => {
      const scriptTypes = action.payload;
      if (!scriptTypes.length) {
        return;
      }
      const resolved = new StepNodeRecord();
      const seen = new StepNodeRecord();
      /* function to
        1. copy the dependencyCheckList to the last node
        1. remove last node in queue
        3. add last node to resolved if there are still nodes in queue
      */

      Object.keys(state.dependencyChecks).forEach((scriptType) => {
        // loop through each scriptType
        state.dependencyChecks[scriptType].ids.forEach((id) => {
          // loop through each dependency element in each scriptType
          const stepId = id.toString();
          // clear queue
          const queue = new DependencyQueue({ scriptType, stepId });
          while (queue.length) {
            // make sure processing every node in queue

            // current pointer node
            const nodeToCheck = queue[queue.length - 1];
            // find the current node in the state
            const stepToUpdate =
              state.dependencyChecks[nodeToCheck.scriptType].entities[
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

                stepToUpdate.dependency.forEach((node) => {
                  // loop through each node in dependency

                  // default dependency's scriptType to the first type in scriptTypes
                  node.type = node.type || scriptTypes[0];
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
                });
              } else {
                // current node has been seen before
                // it implies that current node have all nodes in dependency resolved
                const { dependencyCheckList = [] } = stepToUpdate;
                for (let i = dependencyCheckList.length - 1; i >= 0; i -= 1) {
                  // loop through every node in current dependency check list from the end

                  // step that corresponds to current node to replace
                  const stepToReplace =
                    state.dependencyChecks[dependencyCheckList[i].type || '']
                      ?.entities[dependencyCheckList[i].stepId];
                  if (stepToReplace) {
                    // if stepToReplace exists
                    // it means the stepToReplace has dependencyCheckList to replace

                    // remove the current nodeToReplace first
                    const nodeToReplace = dependencyCheckList.splice(i, 1)[0];

                    // copy stepToReplace's dependencyCheckList to stepToUpdate's dependencyCheckList
                    // without duplicated nodes
                    // eslint-disable-next-line no-unused-expressions
                    stepToReplace.dependencyCheckList?.forEach((node) => {
                      if (
                        !isIncludedInDependencyArray(node, dependencyCheckList)
                      ) {
                        dependencyCheckList.splice(i, 0, node);
                      }
                    });

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
    },
  },
});

export default dependencyCheckSlice.reducer;

export interface GlobalDependencyCheckState {
  dependencyCheck: DependencyCheckState;
}

export const {
  dependencyCheckReceived,
  importRawDependencyChecks,
  updateDependencyCheckList,
  resolveAllDependency,
} = dependencyCheckSlice.actions;
