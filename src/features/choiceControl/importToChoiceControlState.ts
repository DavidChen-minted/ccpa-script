import choiceControlAdapter, { ChoiceControl } from './choiceControlEntity';

const importToChoiceControlState = (choiceControlArray?: ChoiceControl[]) =>
  choiceControlArray &&
  choiceControlAdapter.setAll(
    choiceControlAdapter.getInitialState(),
    choiceControlArray
  );

export default importToChoiceControlState;
