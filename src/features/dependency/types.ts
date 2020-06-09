export interface StepRecord {
  [key: string]: {
    [key: string]: boolean;
  };
}

export interface StepNode {
  scriptType: string;
  stepId: string;
}
