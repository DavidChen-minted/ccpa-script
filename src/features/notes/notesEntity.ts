import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Notes {
  notes: string;
  id: string;
}

const notesAdapter = createEntityAdapter<Notes>({
  selectId: (notes) => notes.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export default notesAdapter;
