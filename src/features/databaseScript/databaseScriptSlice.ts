/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import databaseScriptAdapter, {
  databaseScriptEntityState,
} from './databaseScriptEntity';
import importToDatabaseScriptsState, {
  ImportToDatabaseScriptsStateArgs,
} from './importToDatabaseScriptsState';

export interface DatabaseScriptsState {
  [key: string]: databaseScriptEntityState;
}

export interface DatabaseScriptState {
  scripts: DatabaseScriptsState;
}

const databaseScriptSlice = createSlice({
  name: 'databaseScript',
  initialState: {
    scripts: {},
  } as DatabaseScriptState,
  reducers: {
    databaseScriptReceived: (
      state,
      action: PayloadAction<DatabaseScriptState | undefined>
    ) => {
      if (!action.payload) {
        return state;
      }
      return action.payload;
    },
    importRawDatabaseScripts: (
      state,
      action: PayloadAction<ImportToDatabaseScriptsStateArgs>
    ) => {
      const scripts = importToDatabaseScriptsState(action.payload);
      if (scripts) {
        state.scripts = scripts;
      }
      return state;
    },
    updateScript: (
      state,
      action: PayloadAction<{
        stepId: string;
        scriptType: string;
        script: string;
      }>
    ) => {
      const { stepId, scriptType, script } = action.payload;
      if (stepId && scriptType) {
        databaseScriptAdapter.updateOne(state.scripts[scriptType], {
          id: stepId,
          changes: { script },
        });
      }
    },
  },
});

export default databaseScriptSlice.reducer;

export interface GlobalDatabaseScriptState {
  databaseScript: DatabaseScriptState;
}

export const {
  databaseScriptReceived,
  importRawDatabaseScripts,
  updateScript,
} = databaseScriptSlice.actions;
