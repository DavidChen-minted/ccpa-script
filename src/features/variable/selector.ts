import { GlobalVariableState } from './variableSlice';

export const selectVariable = (state: GlobalVariableState) => state.variable;
