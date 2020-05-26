/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScriptDatabaseState = string[];

const scriptDatabaseSlice = createSlice({
  name: 'scriptDatabase',
  initialState: [] as ScriptDatabaseState,
  reducers: {
    scriptDatabaseReceived: (_, action: PayloadAction<ScriptDatabaseState>) => {
      return action.payload;
    },
  },
});

export default scriptDatabaseSlice.reducer;

export interface GlobalScriptDatabaseState {
  scriptDatabase: ScriptDatabaseState;
}

export const { scriptDatabaseReceived } = scriptDatabaseSlice.actions;
