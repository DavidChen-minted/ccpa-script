/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import notesAdapter, { Notes } from './notesEntity';

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState(),
  reducers: {
    notesReceived: (state, action: PayloadAction<Notes[]>) => {
      notesAdapter.setAll(state, action.payload);
    },
    upsertNotes: (state, action: PayloadAction<Notes>) => {
      notesAdapter.upsertOne(state, action.payload);
    },
    removeNotes: (state, action: PayloadAction<string>) => {
      notesAdapter.removeOne(state, action.payload);
    },
  },
});

export default notesSlice.reducer;

export type NotesState = ReturnType<typeof notesSlice['reducer']>;

export interface GlobalNotesState {
  notes: NotesState;
}

export const { notesReceived, upsertNotes, removeNotes } = notesSlice.actions;
