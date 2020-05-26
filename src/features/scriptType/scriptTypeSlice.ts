/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScriptTypes = string[];

const scriptTypeSlice = createSlice({
  name: 'scriptType',
  initialState: [] as ScriptTypes,
  reducers: {
    scriptTypeReceived: (_, action: PayloadAction<ScriptTypes>) => {
      return action.payload;
    },
  },
});

export default scriptTypeSlice.reducer;

export type ScriptTypeState = ReturnType<typeof scriptTypeSlice['reducer']>;

export interface GlobalScriptTypeState {
  scriptType: ScriptTypeState;
}

export const { scriptTypeReceived } = scriptTypeSlice.actions;
