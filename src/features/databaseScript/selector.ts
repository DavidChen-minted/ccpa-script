import { GlobalDatabaseScriptState } from './databaseScriptSlice';
import databaseScriptAdapter from './databaseScriptEntity';

export const selectDatabaseScriptByScriptType = ({
  state,
  type,
}: {
  state: GlobalDatabaseScriptState;
  type: string;
}) =>
  state.databaseScript.scripts[type] || databaseScriptAdapter.getInitialState();
