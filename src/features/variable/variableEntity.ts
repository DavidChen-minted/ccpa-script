import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Variable {
  value?: string;
  description: string;
  id: string;
}

const variableAdapter = createEntityAdapter<Variable>({
  selectId: (variable) => variable.id,
});

export default variableAdapter;
