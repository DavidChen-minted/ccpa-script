/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sciptSnippetAdapter, { ScriptSnippet } from './sciptSnippetEntity';

const scriptSnippetSlice = createSlice({
  name: 'scriptSnippet',
  initialState: sciptSnippetAdapter.getInitialState(),
  reducers: {
    scriptSnippetReceived: (state, action: PayloadAction<ScriptSnippet[]>) => {
      sciptSnippetAdapter.setAll(state, action.payload);
    },
  },
});

export default scriptSnippetSlice.reducer;

export type ScriptSnippetState = ReturnType<
  typeof scriptSnippetSlice['reducer']
>;

export interface GlobalscriptSnippetState {
  scriptSnippet: ScriptSnippetState;
}

export const { scriptSnippetReceived } = scriptSnippetSlice.actions;
