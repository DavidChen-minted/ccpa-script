import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface Choice {
  id: string;
  label?: string;
  notes?: string;
}

export interface Choices {
  [key: string]: Choice;
}

export interface ChoiceControl {
  stepId: string;
  choices: Choices;
  selectedChoiceId?: string | null;
}

export type ChoiceControlEntityState = EntityState<ChoiceControl>;

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

const choiceControlAdapter = createEntityAdapter<ChoiceControl>({
  selectId: (choiceControl) => choiceControl.stepId,
});

export default choiceControlAdapter;
