import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  scriptTypeReceived,
  ScriptTypes,
} from 'features/scriptType/scriptTypeSlice';
import {
  scriptDatabaseReceived,
  ScriptDatabase,
} from 'features/scriptDatabase/scriptDatabaseSlice';
import {
  importVariables,
  VariablesToImport,
} from 'features/variable/variableSlice';
import {
  importScriptSnippet,
  ScriptSnippetsToImport,
} from 'features/scriptSnippet/scriptSnippetSlice';

interface DataToImport {
  vars?: VariablesToImport;
  snippets?: ScriptSnippetsToImport;
  types?: ScriptTypes;
  db?: ScriptDatabase;
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
    dispatch(importScriptSnippet(dataToImport?.snippets));
  }, [dataToImport]);
};

export default useImportData;
