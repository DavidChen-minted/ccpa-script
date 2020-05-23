import { combineReducers } from '@reduxjs/toolkit';
import scriptSnippet from 'features/snippet/scriptSnippetSlice';

const rootReducer = combineReducers({ scriptSnippet });

export default rootReducer;
