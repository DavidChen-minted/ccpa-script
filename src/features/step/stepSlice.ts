/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StepEntityState } from './stepEntity';
import { getNextVisibleStepId } from './getStepId';
import importToStepsState, {
  ImportToStepsStateArgs,
} from './importToStepsState';

export interface StepsState {
  [key: string]: StepEntityState;
}

export interface StepState {
  steps: StepsState;
  currentStepId?: string;
}

const stepSlice = createSlice({
  name: 'step',
  initialState: {
    steps: {},
  } as StepState,
  reducers: {
    stepReceived: (state, action: PayloadAction<StepState | undefined>) => {
      if (!action.payload) {
        return state;
      }
      return action.payload;
    },
    importRawSteps: (state, action: PayloadAction<ImportToStepsStateArgs>) => {
      const steps = importToStepsState(action.payload);
      if (steps) {
        state.steps = steps;
      }
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

export const {
  stepReceived,
  importRawSteps,
  changeCurrentStepId,
} = stepSlice.actions;
