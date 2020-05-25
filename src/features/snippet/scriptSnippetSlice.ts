/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import scriptSnippetAdapter, { ScriptSnippet } from './sciptSnippetEntity';

const scriptSnippetSlice = createSlice({
  name: 'scriptSnippet',
  initialState: scriptSnippetAdapter.getInitialState(),
  reducers: {
    scriptSnippetReceived: (state, action: PayloadAction<ScriptSnippet[]>) => {
      scriptSnippetAdapter.setAll(state, action.payload);
    },
  },
});

export default scriptSnippetSlice.reducer;

export type ScriptSnippetState = ReturnType<
  typeof scriptSnippetSlice['reducer']
>;

export interface GlobalScriptSnippetState {
  scriptSnippet: ScriptSnippetState;
}

export const { scriptSnippetReceived } = scriptSnippetSlice.actions;
