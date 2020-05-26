/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScriptTypeState = string[];

const scriptTypeSlice = createSlice({
  name: 'scriptType',
  initialState: [] as ScriptTypeState,
  reducers: {
    scriptTypeReceived: (_, action: PayloadAction<ScriptTypeState>) => {
      return action.payload;
    },
  },
});

export default scriptTypeSlice.reducer;

export interface GlobalScriptTypeState {
  scriptType: ScriptTypeState;
}

export const { scriptTypeReceived } = scriptTypeSlice.actions;
