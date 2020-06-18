export interface Dependency {
  stepId: string;
  choice?: string;
  type: string;
}

export interface RawDependency {
  stepId: string;
  choice?: string;
  type?: string;
}

export interface StepRecord {
  [key: string]: {
    [key: string]: boolean;
  };
}

export interface StepNode {
  scriptType: string;
  stepId: string;
}

export const instanceOfRawDependency = (
  object: any
): object is RawDependency => {
  if (typeof object?.stepId !== 'string') {
    return false;
  }
  if (object.choice !== undefined && typeof object.choice !== 'string') {
    return false;
  }
  if (object.type !== undefined && typeof object.type !== 'string') {
    return false;
  }
  return true;
};
