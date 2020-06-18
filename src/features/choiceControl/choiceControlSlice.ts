/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import choiceControlAdapter, {
  ChoiceControl,
  ChoiceControlEntityState,
} from './choiceControlEntity';
import importToChoiceControlState from './importToChoiceControlState';

export type ChoiceControlState = ChoiceControlEntityState;

const choiceControlSlice = createSlice({
  name: 'choiceControl',
  initialState: choiceControlAdapter.getInitialState(),
  reducers: {
    choiceControlReceived: (
      state,
      action: PayloadAction<ChoiceControlState | undefined>
    ) => {
      if (!action.payload) {
        return state;
      }
      return action.payload;
    },
    importRawChoiceControl: (
      state,
      action: PayloadAction<ChoiceControl[] | undefined>
    ) => {
      const choiceControl = importToChoiceControlState(action.payload);
      return choiceControl || state;
    },
    updateSelectedChoiceId: (
      state,
      action: PayloadAction<{
        stepId: string;
        choiceId: ChoiceControl['selectedChoiceId'];
      }>
    ) => {
      choiceControlAdapter.updateOne(state, {
        id: action.payload.stepId,
        changes: { selectedChoiceId: action.payload.choiceId },
      });
    },
  },
});

export default choiceControlSlice.reducer;

export interface GlobalChoiceControlState {
  choiceControl: ChoiceControlState;
}

export const {
  choiceControlReceived,
  importRawChoiceControl,
  updateSelectedChoiceId,
} = choiceControlSlice.actions;
