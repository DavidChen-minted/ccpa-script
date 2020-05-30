import { GlobalNotesState } from './notesSlice';

export const selectNotes = (state: GlobalNotesState) => state.notes;
