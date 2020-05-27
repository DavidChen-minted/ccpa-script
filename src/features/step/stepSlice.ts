/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import stepAdapter, { Step, StepEntityState } from './stepEntity';
import { getNextVisibleStepId } from './getStepId';

export interface StepsState {
  [key: string]: StepEntityState;
}

export interface StepState {
  steps: StepsState;
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
    changeCurrentStepId: (state, action: PayloadAction<string | undefined>) => {
      if (state.currentStepId !== action.payload) {
        state.currentStepId = action.payload;
      }
      return state;
    },
  },
});

export default stepSlice.reducer;

export interface GlobalStepState {
  step: StepState;
}

export const { importParsedSteps, changeCurrentStepId } = stepSlice.actions;
