/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import stepAdapter, { Step, StepEntityState } from './stepEntity';
import choiceControlAdapter, {
  ChoiceControl,
  ChoiceControlEntityState,
} from './choiceControlEntity';
import getNextVisibleStepId from './getNextVisibleStep';

export interface StepsState {
  [key: string]: StepEntityState;
}

export interface StepState {
  steps: StepsState;
  choiceControl: ChoiceControlEntityState;
  currentStepId?: string;
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
      state.currentStepId = getNextVisibleStepId(
        state.steps[action.payload.types[0]]
      );
      return state;
    },
    importChoiceControl: (
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

export const { importParsedSteps, importChoiceControl } = stepSlice.actions;
