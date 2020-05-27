import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface DatabaseScript {
  id: string;
  scriptType: string;
  script?: string;
  db: string;
  snippets: string[];
}

export type databaseScriptEntityState = EntityState<DatabaseScript>;

const databaseScriptAdapter = createEntityAdapter<DatabaseScript>({
  selectId: (databaseScript) => databaseScript.id,
});

export default databaseScriptAdapter;
