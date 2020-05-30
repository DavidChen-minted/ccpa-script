import { createEntityAdapter } from '@reduxjs/toolkit';

export interface ScriptResult {
  value?: string;
  scriptDatabase: string;
  scriptType: string;
}

const scriptResultAdapter = createEntityAdapter<ScriptResult>({
  selectId: (scriptResult) =>
    `${scriptResult.scriptType} - ${scriptResult.scriptDatabase}`,
});

export default scriptResultAdapter;
