/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dependencyCheckAdapter, {
  Dependency,
  DependencyCheck,
  DependencyCheckEntityState,
} from './dependencyCheckEntity';
import StepNodeRecord from './StepNodeRecord';
import DependencyQueue from './DependencyQueue';

export interface DependencyChecksState {
  [key: string]: DependencyCheckEntityState;
}

export interface DependencyCheckState {
  dependencyChecks: DependencyChecksState;
}

export interface ParsedDependencyChecks {
  [key: string]: DependencyCheck[];
}

export interface ImportParsedDependencyChecksPayload {
  dependencyChecks?: ParsedDependencyChecks | null;
  types: string[];
}

const dependencyCheckSlice = createSlice({
  name: 'dependencyCheck',
  initialState: {
    dependencyChecks: {},
  } as DependencyCheckState,
  reducers: {
    importParsedDependencyChecks: (
      state,
      action: PayloadAction<ImportParsedDependencyChecksPayload>
    ) => {
      if (!action.payload.dependencyChecks) {
        return state;
      }
      const { dependencyChecks } = action.payload;
      state.dependencyChecks = action.payload.types.reduce<
        DependencyChecksState
      >((obj, scriptType) => {
        obj[scriptType] = dependencyCheckAdapter.setAll(
          dependencyCheckAdapter.getInitialState(),
          dependencyChecks[scriptType]
        );
        return obj;
      }, {});
      return state;
    },
    updateDependencyArray: (
      state,
      action: PayloadAction<{
        id: string;
        scriptType: string;
        dependencyArray: Dependency[];
      }>
    ) => {
      const { id, scriptType, dependencyArray } = action.payload;
      if (id && scriptType) {
        dependencyCheckAdapter.updateOne(state.dependencyChecks[scriptType], {
          id,
          changes: { dependencyArray },
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
        1. copy the dependencyArray to the last node
        1. remove last node in queue
        3. add last node to resolved if there are still nodes in queue
      */
      const resolveQueueEnd = (
        queue: DependencyQueue,
        dependencyArray: Dependency[] = []
      ) => {
        queue.pop();
        if (queue.length) {
          const stepNode = queue[queue.length - 1];
          if (stepNode) {
            const stepToUpdate =
              state.dependencyChecks[stepNode.scriptType].entities[
                stepNode.stepId
              ];
            if (stepToUpdate) {
              stepToUpdate.dependencyArray = [
                stepToUpdate.dependency,
                ...dependencyArray,
              ];
            }
          }
          resolved.add(stepNode);
        }
      };

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

              resolveQueueEnd(queue, stepToUpdate?.dependencyArray);
            } else if (stepToUpdate) {
              // current node still have dependency to resolve
              if (!seen.includes(nodeToCheck)) {
                // if current node not seen before
                // clear current node's dependency array
                stepToUpdate.dependencyArray = [];
                // add current node to seen
                seen.add(nodeToCheck);
              }

              // default dependency's scriptType to the first type in scriptTypes
              stepToUpdate.dependency.type =
                stepToUpdate.dependency.type || scriptTypes[0];
              // construct nextNode
              const nextNode = {
                scriptType: stepToUpdate.dependency.type,
                stepId: stepToUpdate.dependency.stepId,
              };
              if (queue.includes(nextNode)) {
                // if nextNode is met in the queue before,
                // it means there's circular dependency
                throw new Error('circular dependency detected');
              } else {
                // nextNode is safe to add to queue
                queue.push(nextNode);
              }
            } else {
              // current node does not have any dependency
              resolveQueueEnd(queue);
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
  importParsedDependencyChecks,
  updateDependencyArray,
  resolveAllDependency,
} = dependencyCheckSlice.actions;
