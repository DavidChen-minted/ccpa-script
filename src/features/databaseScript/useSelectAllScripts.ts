/* eslint-disable no-param-reassign */
import { useSelector, shallowEqual } from 'react-redux';
import { useCallback } from 'react';
import { Dictionary } from '@reduxjs/toolkit';
import { selectScriptTypes } from 'features/scriptType/selector';
import databaseScriptAdapter, { DatabaseScript } from './databaseScriptEntity';
import { selectDatabaseScriptByScriptType } from './selector';
import { GlobalDatabaseScriptState } from './databaseScriptSlice';

const useSelectAllScripts = () => {
  const scriptType = useSelector(selectScriptTypes, shallowEqual);
  const selectAllScripts = useCallback(
    (state: GlobalDatabaseScriptState) => {
      return scriptType.reduce<{ [key: string]: Dictionary<DatabaseScript> }>(
        (obj, type) => {
          const {
            selectEntities,
          } = databaseScriptAdapter.getSelectors(
            (s: GlobalDatabaseScriptState) =>
              selectDatabaseScriptByScriptType({ state: s, type })
          );
          obj[type] = selectEntities(state);
          return obj;
        },
        {}
      );
    },
    [databaseScriptAdapter, scriptType, selectDatabaseScriptByScriptType]
  );
  const allScripts = useSelector(selectAllScripts);
  return allScripts;
};

export default useSelectAllScripts;
