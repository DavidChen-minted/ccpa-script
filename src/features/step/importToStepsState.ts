/* eslint-disable no-param-reassign */
import stepAdapter, { Step } from './stepEntity';
import { StepsState } from './stepSlice';

export interface ParsedSteps {
  [key: string]: Step[];
}

export interface ImportToStepsStateArgs {
  steps?: ParsedSteps;
  types: string[];
}

const importToStepsState = ({ steps, types }: ImportToStepsStateArgs) =>
  steps &&
  types.reduce<StepsState>((obj, scriptType) => {
    obj[scriptType] = stepAdapter.setAll(
      stepAdapter.getInitialState(),
      steps[scriptType]
    );
    return obj;
  }, {});

export default importToStepsState;
