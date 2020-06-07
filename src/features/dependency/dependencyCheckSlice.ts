/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dependencyCheckAdapter, {
  Dependency,
  DependencyCheck,
  DependencyCheckEntityState,
} from './dependencyCheckEntity';

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
  },
});

export default dependencyCheckSlice.reducer;

export interface GlobalDependencyCheckState {
  dependencyCheck: DependencyCheckState;
}

export const {
  importParsedDependencyChecks,
  updateDependencyArray,
} = dependencyCheckSlice.actions;
