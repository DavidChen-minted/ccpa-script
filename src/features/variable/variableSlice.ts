/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import variableAdapter, { Variable } from './variableEntity';

export interface VariablesToImport {
  [key: string]: {
    description?: string;
  };
}

const variableSlice = createSlice({
  name: 'variable',
  initialState: variableAdapter.getInitialState(),
  reducers: {
    variableReceived: (state, action: PayloadAction<Variable[]>) => {
      variableAdapter.setAll(state, action.payload);
    },
    importVariables: (
      state,
      action: PayloadAction<VariablesToImport | undefined>
    ) => {
      const variablesToImport = action.payload;
      if (!variablesToImport) {
        return;
      }
      const parsedVariables = Object.entries(variablesToImport).map(
        ([id, value]) => ({
          id,
          description: value?.description ?? '',
        })
      );
      variableAdapter.setAll(state, parsedVariables);
    },
  },
});

export default variableSlice.reducer;

export type VariableState = ReturnType<typeof variableSlice['reducer']>;

export interface GlobalVariableState {
  variable: VariableState;
}

export const { variableReceived, importVariables } = variableSlice.actions;
