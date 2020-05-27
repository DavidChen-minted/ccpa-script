import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface Dependency {
  id: string;
  choice?: string;
  type?: string;
}

export interface Step {
  description?: string;
  id: string;
  scriptType: string;
  order: number;
  visible: boolean;
  dependency?: Dependency;
}

export type StepEntityState = EntityState<Step>;

export const instanceOfDependency = (object: any): object is Dependency => {
  if (typeof object?.id !== 'string') {
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

const stepAdapter = createEntityAdapter<Step>({
  selectId: (step) => step.id,
  sortComparer: (a, b) => a.order - b.order,
});

export default stepAdapter;
