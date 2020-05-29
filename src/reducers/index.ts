import { combineReducers } from '@reduxjs/toolkit';
import scriptSnippet from 'features/scriptSnippet/scriptSnippetSlice';
import variable from 'features/variable/variableSlice';
import scriptType from 'features/scriptType/scriptTypeSlice';
import scriptDatabase from 'features/scriptDatabase/scriptDatabaseSlice';
import choiceControl from 'features/choiceControl/choiceControlSlice';
import step from 'features/step/stepSlice';
import databaseScript from 'features/databaseScript/databaseScriptSlice';
import notes from 'features/notes/notesSlice';

const rootReducer = combineReducers({
  scriptSnippet,
  variable,
  scriptType,
  scriptDatabase,
  choiceControl,
  step,
  databaseScript,
  notes,
});

export default rootReducer;
