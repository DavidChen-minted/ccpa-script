/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import databaseScriptAdapter, {
  DatabaseScript,
  databaseScriptEntityState,
} from './databaseScriptEntity';

export interface DatabaseScriptsState {
  [key: string]: databaseScriptEntityState;
}

export interface DatabaseScriptState {
  scripts: DatabaseScriptsState;
}

export interface ParsedDatabaseScripts {
  [key: string]: DatabaseScript[];
}

export interface ImportParsedDatabaseScriptsPayload {
  scripts?: ParsedDatabaseScripts | null;
  types: string[];
}

const databaseScriptSlice = createSlice({
  name: 'databaseScript',
  initialState: {
    scripts: {},
  } as DatabaseScriptState,
  reducers: {
    importParsedDatabaseScripts: (
      state,
      action: PayloadAction<ImportParsedDatabaseScriptsPayload>
    ) => {
      if (!action.payload.scripts) {
        return state;
      }
      const { scripts } = action.payload;
      state.scripts = action.payload.types.reduce<DatabaseScriptsState>(
        (obj, scriptType) => {
          obj[scriptType] = databaseScriptAdapter.setAll(
            databaseScriptAdapter.getInitialState(),
            scripts[scriptType]
          );
          return obj;
        },
        {}
      );
      return state;
    },
    updateScript: (
      state,
      action: PayloadAction<{ id: string; type: string; script: string }>
    ) => {
      const { id, type, script } = action.payload;
      if (id && type) {
        databaseScriptAdapter.updateOne(state.scripts[type], {
          id,
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
  importParsedDatabaseScripts,
  updateScript,
} = databaseScriptSlice.actions;
