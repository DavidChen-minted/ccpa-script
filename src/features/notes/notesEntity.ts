import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Notes {
  notes: string;
  stepId: string;
}

const notesAdapter = createEntityAdapter<Notes>({
  selectId: (notes) => notes.stepId,
  sortComparer: (a, b) => a.stepId.localeCompare(b.stepId),
});

export default notesAdapter;
