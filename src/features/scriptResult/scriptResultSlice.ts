/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import scriptResultAdapter, { ScriptResult } from './scriptResultEntity';

export interface ScriptResultsToImport {
  [key: string]: {
    description?: string;
  };
}

const scriptResultSlice = createSlice({
  name: 'scriptResult',
  initialState: scriptResultAdapter.getInitialState(),
  reducers: {
    scriptResultReceived: (state, action: PayloadAction<ScriptResult[]>) => {
      scriptResultAdapter.setAll(state, action.payload);
    },
    updateScriptResultValue: (state, action: PayloadAction<ScriptResult>) => {
      scriptResultAdapter.upsertOne(state, action.payload);
    },
  },
});

export default scriptResultSlice.reducer;

export type ScriptResultState = ReturnType<typeof scriptResultSlice['reducer']>;

export interface GlobalScriptResultState {
  scriptResult: ScriptResultState;
}

export const {
  scriptResultReceived,
  updateScriptResultValue,
} = scriptResultSlice.actions;
