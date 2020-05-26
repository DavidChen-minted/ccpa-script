import { combineReducers } from '@reduxjs/toolkit';
import scriptSnippet from 'features/scriptSnippet/scriptSnippetSlice';
import variable from 'features/variable/variableSlice';
import scriptType from 'features/scriptType/scriptTypeSlice';
import scriptDatabase from 'features/scriptDatabase/scriptDatabaseSlice';
import step from 'features/step/stepSlice';
import choiceControl from 'features/choiceControl/choiceControlSlice';

const rootReducer = combineReducers({
  scriptSnippet,
  variable,
  scriptType,
  scriptDatabase,
  step,
  choiceControl,
});

export default rootReducer;
