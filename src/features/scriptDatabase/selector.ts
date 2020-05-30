import { GlobalScriptDatabaseState } from './scriptDatabaseSlice';

export const selectScriptDatabase = (state: GlobalScriptDatabaseState) =>
  state.scriptDatabase;
