import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  scriptTypeReceived,
  ScriptTypeState,
} from 'features/scriptType/scriptTypeSlice';
import {
  scriptDatabaseReceived,
  ScriptDatabaseState,
} from 'features/scriptDatabase/scriptDatabaseSlice';
import {
  importVariables,
  VariablesToImport,
} from 'features/variable/variableSlice';
import {
  importScriptSnippets,
  ScriptSnippetsToImport,
} from 'features/scriptSnippet/scriptSnippetSlice';
import {
  importParsedSteps,
  importChoiceControl,
} from 'features/step/stepSlice';
import parseStepsToImport, { StepsToImport } from './parseStepsToImport';

interface DataToImport {
  vars?: VariablesToImport;
  snippets?: ScriptSnippetsToImport;
  types?: ScriptTypeState;
  db?: ScriptDatabaseState;
  steps?: StepsToImport[];
}

const useImportData = (dataToImport?: DataToImport) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const scriptTypes = dataToImport?.types;
    const scriptDatabase = dataToImport?.db;
    if (!(scriptTypes?.length && scriptDatabase?.length)) {
      return;
    }

    dispatch(scriptTypeReceived(scriptTypes));
    dispatch(scriptDatabaseReceived(scriptDatabase));
    dispatch(importVariables(dataToImport?.vars));
    dispatch(importScriptSnippets(dataToImport?.snippets));
    const { parsedSteps, choiceControl } =
      parseStepsToImport({
        steps: dataToImport?.steps,
        types: scriptTypes,
      }) || {};
    dispatch(importParsedSteps({ steps: parsedSteps, types: scriptTypes }));
    dispatch(importChoiceControl(choiceControl));
  }, [dataToImport]);
};

export default useImportData;
