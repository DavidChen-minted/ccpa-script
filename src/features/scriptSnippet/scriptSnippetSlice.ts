/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import scriptSnippetAdapter, { ScriptSnippet } from './sciptSnippetEntity';

export interface ScriptSnippetsToImport {
  [key: string]: string;
}

const scriptSnippetSlice = createSlice({
  name: 'scriptSnippet',
  initialState: scriptSnippetAdapter.getInitialState(),
  reducers: {
    scriptSnippetReceived: (state, action: PayloadAction<ScriptSnippet[]>) => {
      scriptSnippetAdapter.setAll(state, action.payload);
    },
    importScriptSnippets: (
      state,
      action: PayloadAction<ScriptSnippetsToImport | undefined>
    ) => {
      const scriptSnippetsToImport = action.payload;
      if (!scriptSnippetsToImport) {
        return;
      }
      const parsedScriptSnippets = Object.entries(scriptSnippetsToImport).map(
        ([id, snippet]) => ({
          id,
          snippet,
        })
      );
      scriptSnippetAdapter.setAll(state, parsedScriptSnippets);
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

export const {
  scriptSnippetReceived,
  importScriptSnippets,
} = scriptSnippetSlice.actions;
