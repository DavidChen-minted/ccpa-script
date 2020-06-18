import { Dictionary } from '@reduxjs/toolkit';
import { ChoiceControl } from 'features/choiceControl/choiceControlEntity';
import { Dependency } from './dependencyCheckEntity';

const isDependencyFulfilled = (
  dependencyCheckList: Dependency[],
  choiceControlDictionary: Dictionary<ChoiceControl>
) =>
  dependencyCheckList.every((dependency) => {
    const currentChoiceCheck = choiceControlDictionary[dependency.stepId];
    if (!currentChoiceCheck) {
      return false;
    }
    const { selectedChoiceId } = currentChoiceCheck;
    if (!selectedChoiceId) {
      return false;
    }
    if (dependency.choice) {
      return dependency.choice === selectedChoiceId;
    }
    return true;
  });

export default isDependencyFulfilled;
