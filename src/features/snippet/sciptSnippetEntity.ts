import { createEntityAdapter } from '@reduxjs/toolkit';

export interface ScriptSnippet {
  snippet: string;
  id: string;
}

const scriptSnippetAdapter = createEntityAdapter<ScriptSnippet>({
  selectId: (snippet) => snippet.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export default scriptSnippetAdapter;
