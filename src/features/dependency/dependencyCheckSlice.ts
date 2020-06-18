/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dependencyCheckAdapter, {
  Dependency,
  DependencyCheckEntityState,
} from './dependencyCheckEntity';
import { resolveAllDependency as resolveAllDependencyForState } from './resolveDependency';
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
      const dependencyChecks = resolveAllDependencyForState({
        dependencyChecks: state.dependencyChecks,
        types: action.payload,
      });
      if (dependencyChecks) {
        state.dependencyChecks = dependencyChecks;
      }
      return state;
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
