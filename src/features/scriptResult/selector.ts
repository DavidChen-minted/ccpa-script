import { GlobalScriptResultState } from './scriptResultSlice';

export const selectScriptResult = (state: GlobalScriptResultState) =>
  state.scriptResult;
