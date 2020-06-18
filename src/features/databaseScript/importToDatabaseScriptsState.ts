/* eslint-disable no-param-reassign */
import databaseScriptAdapter, { DatabaseScript } from './databaseScriptEntity';
import { DatabaseScriptsState } from './databaseScriptSlice';

export interface ParsedDatabaseScripts {
  [key: string]: DatabaseScript[];
}

export interface ImportToDatabaseScriptsStateArgs {
  scripts?: ParsedDatabaseScripts;
  types: string[];
}

const importToDatabaseScriptsState = ({
  scripts,
  types,
}: ImportToDatabaseScriptsStateArgs) =>
  scripts &&
  types.reduce<DatabaseScriptsState>((obj, scriptType) => {
    obj[scriptType] = databaseScriptAdapter.setAll(
      databaseScriptAdapter.getInitialState(),
      scripts[scriptType]
    );
    return obj;
  }, {});

export default importToDatabaseScriptsState;
