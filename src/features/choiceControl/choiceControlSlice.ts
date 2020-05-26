/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Choice {
  id: string;
  label?: string;
  notes?: string;
}

export interface Choices {
  [key: string]: Choice;
}

export interface ChoiceControl {
  choices: Choices;
  selectedChoice?: Choice | null;
}

export interface ChoiceControlState {
  [key: string]: ChoiceControl;
}

export const instanceOfChoice = (object: any): object is Choice => {
  if (typeof object?.id !== 'string') {
    return false;
  }
  if (object.label !== undefined && typeof object.label !== 'string') {
    return false;
  }
  if (object.notes !== undefined && typeof object.notes !== 'string') {
    return false;
  }
  return true;
};

const choiceControlSlice = createSlice({
  name: 'choiceControl',
  initialState: {} as ChoiceControlState,
  reducers: {
    choiceControlReceived: (
      state,
      action: PayloadAction<ChoiceControlState | undefined>
    ) => {
      return action.payload || state;
    },
  },
});

export default choiceControlSlice.reducer;

export interface GlobalChoiceControlState {
  choiceControl: ChoiceControlState;
}

export const { choiceControlReceived } = choiceControlSlice.actions;
