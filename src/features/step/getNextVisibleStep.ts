import { StepEntityState } from './stepEntity';

const getNextVisibleStepId = (
  steps: StepEntityState,
  startId = ''
): string | undefined => {
  let startIndex = -1;
  if (startId && steps.entities[startId]) {
    startIndex = steps.ids.findIndex((id) => id === startId);
  }
  const result = steps.ids.find((id, index) => {
    if (index <= startIndex) {
      return false;
    }
    return !!steps.entities[id]?.visible;
  });
  return result?.toString();
};

export default getNextVisibleStepId;
