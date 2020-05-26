import { combineReducers } from '@reduxjs/toolkit';
import scriptSnippet from 'features/scriptSnippet/scriptSnippetSlice';
import variable from 'features/variable/variableSlice';
import scriptType from 'features/scriptType/scriptTypeSlice';
import scriptDatabase from 'features/scriptDatabase/scriptDatabaseSlice';

const rootReducer = combineReducers({
  scriptSnippet,
  variable,
  scriptType,
  scriptDatabase,
});

export default rootReducer;
