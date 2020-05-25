/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import variableAdapter, { Variable } from './variableEntity';

const variableSlice = createSlice({
  name: 'variable',
  initialState: variableAdapter.getInitialState(),
  reducers: {
    variableReceived: (state, action: PayloadAction<Variable[]>) => {
      variableAdapter.setAll(state, action.payload);
    },
  },
});

export default variableSlice.reducer;

export type VariableState = ReturnType<typeof variableSlice['reducer']>;

export interface GlobalVariableState {
  variable: VariableState;
}

export const { variableReceived } = variableSlice.actions;
