import { GlobalChoiceControlState } from './choiceControlSlice';

export const selectChoiceControl = (state: GlobalChoiceControlState) =>
  state.choiceControl;
