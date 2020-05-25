import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Variable {
  description: string;
  id: string;
}

const variableAdapter = createEntityAdapter<Variable>({
  selectId: (variable) => variable.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export default variableAdapter;
