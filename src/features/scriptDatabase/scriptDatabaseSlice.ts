/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScriptDatabase = string[];

const scriptDatabaseSlice = createSlice({
  name: 'scriptDatabase',
  initialState: [] as ScriptDatabase,
  reducers: {
    scriptDatabaseReceived: (_, action: PayloadAction<ScriptDatabase>) => {
      return action.payload;
    },
  },
});

export default scriptDatabaseSlice.reducer;

export type ScriptDatabaseState = ReturnType<
  typeof scriptDatabaseSlice['reducer']
>;

export interface GlobalScriptDatabaseState {
  scriptDatabase: ScriptDatabaseState;
}

export const { scriptDatabaseReceived } = scriptDatabaseSlice.actions;
