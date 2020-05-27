import { StepEntityState } from './stepEntity';

export const getNextVisibleStepId = ({
  ids,
  entities,
  startId = '',
}: StepEntityState & { startId?: string }): string | undefined => {
  let startIndex = -1;
  if (startId && entities[startId]) {
    startIndex = ids.findIndex((id) => id === startId);
  }
  const result = ids.find((id, index) => {
    if (index <= startIndex) {
      return false;
    }
    return !!entities[id]?.visible;
  });
  return result?.toString();
};

export const getPrevVisibleStepId = ({
  ids,
  entities,
  endId = '',
}: StepEntityState & { endId?: string }): string | undefined => {
  let endIndex = ids.length;
  if (endId && entities[endId]) {
    endIndex = ids.findIndex((id) => id === endId);
  }
  let result: undefined | string;
  for (let i = endIndex - 1; i >= 0; i -= 1) {
    if (entities[ids[i]]?.visible) {
      result = ids[i].toString();
      break;
    }
  }
  return result;
};
