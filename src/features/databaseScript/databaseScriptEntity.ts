import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface DatabaseScript {
  stepId: string;
  scriptType: string;
  script?: string;
  description?: string;
  db: string;
  snippets: string[];
}

export type databaseScriptEntityState = EntityState<DatabaseScript>;

const databaseScriptAdapter = createEntityAdapter<DatabaseScript>({
  selectId: (databaseScript) => databaseScript.stepId,
});

export default databaseScriptAdapter;
