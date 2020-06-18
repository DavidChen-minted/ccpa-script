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
import { stepReceived } from 'features/step/stepSlice';
import { choiceControlReceived } from 'features/choiceControl/choiceControlSlice';
import { databaseScriptReceived } from 'features/databaseScript/databaseScriptSlice';
import layoutScriptResult from 'features/scriptResult/layoutScriptResult';
import { scriptResultReceived } from 'features/scriptResult/scriptResultSlice';
import {
  dependencyCheckReceived,
  resolveAllDependency,
} from 'features/dependency/dependencyCheckSlice';
import { getNextVisibleStepId } from 'features/step/getStepId';
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
    const scriptResult = layoutScriptResult({ scriptTypes, scriptDatabase });
    dispatch(scriptResultReceived(scriptResult));
    dispatch(importVariables(dataToImport?.vars));
    dispatch(importScriptSnippets(dataToImport?.snippets));
    const {
      parsedSteps,
      parsedChoiceControl,
      parsedDatabaseScripts,
      parsedDependencyChecks,
    } =
      parseStepsToImport({
        steps: dataToImport?.steps,
        types: scriptTypes,
        snippets: dataToImport?.snippets,
      }) || {};

    if (parsedSteps && parsedDatabaseScripts && parsedDependencyChecks) {
      dispatch(
        stepReceived({
          steps: parsedSteps,
          currentStepId: getNextVisibleStepId(parsedSteps[scriptTypes[0]]),
        })
      );
      dispatch(
        databaseScriptReceived({
          scripts: parsedDatabaseScripts,
        })
      );
      dispatch(
        dependencyCheckReceived({
          dependencyChecks: parsedDependencyChecks,
        })
      );
      dispatch(choiceControlReceived(parsedChoiceControl));
      dispatch(resolveAllDependency(scriptTypes));
    }
  }, [dataToImport]);
};

export default useImportData;
