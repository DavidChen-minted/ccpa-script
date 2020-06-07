import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface Dependency {
  stepId: string;
  choice?: string;
  type?: string;
}

export interface DependencyCheck {
  stepId: string;
  dependency: Dependency;
  dependencyArray?: Dependency[];
}

export type DependencyCheckEntityState = EntityState<DependencyCheck>;

export const instanceOfDependency = (object: any): object is Dependency => {
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

const dependencyCheckAdapter = createEntityAdapter<DependencyCheck>({
  selectId: (dependencyCheck) => dependencyCheck.stepId,
});

export default dependencyCheckAdapter;
