import { GlobalScriptTypeState } from 'features/scriptType/scriptTypeSlice';
import { GlobalStepState } from './stepSlice';
import stepAdapter from './stepEntity';

export const selectCheckScriptStep = (
  state: GlobalStepState & GlobalScriptTypeState
) => state.step.steps[state.scriptType[0]] || stepAdapter.getInitialState();

export const selectCurrentStepId = (state: GlobalStepState) =>
  state.step.currentStepId;
