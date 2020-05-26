/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, EntityState } from '@reduxjs/toolkit';
import stepAdapter, { Step } from './stepEntity';
import choiceControlAdapter, { ChoiceControl } from './choiceControlEntity';

export interface StepsState {
  [key: string]: EntityState<Step>;
}

export type ChoiceControlState = EntityState<ChoiceControl>;

export interface StepState {
  steps: StepsState;
  choiceControl: ChoiceControlState;
}

export interface ParsedSteps {
  [key: string]: Step[];
}

export interface ImportParsedStepsPayload {
  steps?: ParsedSteps | null;
  types: string[];
}

const stepSlice = createSlice({
  name: 'step',
  initialState: {
    steps: {},
    choiceControl: choiceControlAdapter.getInitialState(),
  } as StepState,
  reducers: {
    importParsedSteps: (
      state,
      action: PayloadAction<ImportParsedStepsPayload>
    ) => {
      if (!action.payload.steps) {
        return state;
      }
      const { steps } = action.payload;
      state.steps = action.payload.types.reduce<StepsState>(
        (obj, scriptType) => {
          obj[scriptType] = stepAdapter.setAll(
            stepAdapter.getInitialState(),
            steps[scriptType]
          );
          return obj;
        },
        {}
      );
      return state;
    },
    choiceControlReceived: (
      state,
      action: PayloadAction<ChoiceControl[] | undefined>
    ) => {
      choiceControlAdapter.setAll(state.choiceControl, action.payload || []);
    },
  },
});

export default stepSlice.reducer;

export interface GlobalStepState {
  step: StepState;
}

export const { importParsedSteps, choiceControlReceived } = stepSlice.actions;
