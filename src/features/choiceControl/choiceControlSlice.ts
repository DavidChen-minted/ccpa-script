/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import choiceControlAdapter, {
  ChoiceControl,
  ChoiceControlEntityState,
} from './choiceControlEntity';

export type ChoiceControlState = ChoiceControlEntityState;

const choiceControlSlice = createSlice({
  name: 'choiceControl',
  initialState: choiceControlAdapter.getInitialState(),
  reducers: {
    importChoiceControl: (
      state,
      action: PayloadAction<ChoiceControl[] | undefined>
    ) => {
      choiceControlAdapter.setAll(state, action.payload || []);
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
  importChoiceControl,
  updateSelectedChoiceId,
} = choiceControlSlice.actions;
