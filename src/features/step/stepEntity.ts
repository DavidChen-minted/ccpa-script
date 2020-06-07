import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface Step {
  description?: string;
  id: string;
  scriptType: string;
  order: number;
  visible: boolean;
}

export type StepEntityState = EntityState<Step>;

const stepAdapter = createEntityAdapter<Step>({
  selectId: (step) => step.id,
  sortComparer: (a, b) => a.order - b.order,
});

export default stepAdapter;
