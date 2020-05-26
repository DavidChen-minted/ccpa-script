/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, EntityState } from '@reduxjs/toolkit';
import stepAdapter, { Step } from './stepEntity';

export interface StepState {
  [key: string]: EntityState<Step>;
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
  initialState: {} as StepState,
  reducers: {
    importParsedSteps: (
      state,
      action: PayloadAction<ImportParsedStepsPayload>
    ) => {
      if (!action.payload.steps) {
        return state;
      }
      const { steps } = action.payload;
      return action.payload.types.reduce<StepState>((obj, scriptType) => {
        obj[scriptType] = stepAdapter.setAll(
          stepAdapter.getInitialState(),
          steps[scriptType]
        );
        return obj;
      }, {});
    },
  },
});

export default stepSlice.reducer;

export interface GlobalStepState {
  step: StepState;
}

export const { importParsedSteps } = stepSlice.actions;
