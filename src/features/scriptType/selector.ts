import { GlobalScriptTypeState } from './scriptTypeSlice';

export const selectScriptTypes = (state: GlobalScriptTypeState) =>
  state.scriptType;
