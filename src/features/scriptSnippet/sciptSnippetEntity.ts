import { createEntityAdapter } from '@reduxjs/toolkit';

export interface ScriptSnippet {
  snippet: string;
  id: string;
}

const scriptSnippetAdapter = createEntityAdapter<ScriptSnippet>({
  selectId: (snippet) => snippet.id,
});

export default scriptSnippetAdapter;
