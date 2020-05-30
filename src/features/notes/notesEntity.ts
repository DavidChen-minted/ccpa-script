import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Notes {
  notes: string;
  stepId: string;
}

const notesAdapter = createEntityAdapter<Notes>({
  selectId: (notes) => notes.stepId,
});

export default notesAdapter;
