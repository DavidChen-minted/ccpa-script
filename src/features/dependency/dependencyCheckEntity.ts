import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { Dependency } from './types';

export interface DependencyCheck {
  stepId: string;
  dependency: Dependency[];
  isFulfilled?: boolean;
  dependencyCheckList?: Dependency[];
}

export type DependencyCheckEntityState = EntityState<DependencyCheck>;

const dependencyCheckAdapter = createEntityAdapter<DependencyCheck>({
  selectId: (dependencyCheck) => dependencyCheck.stepId,
});

export default dependencyCheckAdapter;
