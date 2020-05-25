import { combineReducers } from '@reduxjs/toolkit';
import scriptSnippet from 'features/snippet/scriptSnippetSlice';
import variable from 'features/variable/variableSlice';

const rootReducer = combineReducers({ scriptSnippet, variable });

export default rootReducer;
