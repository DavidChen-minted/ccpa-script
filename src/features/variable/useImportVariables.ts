import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { variableReceived } from './variableSlice';

interface Variables {
  [key: string]: {
    description?: string;
  };
}

const useImportVariables = (variables?: Variables) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!variables) {
      return;
    }
    const parsedVariables = Object.entries(variables).map(([id, value]) => ({
      id,
      description: value?.description ?? '',
    }));
    dispatch(variableReceived(parsedVariables));
  }, [variables]);
};

export default useImportVariables;
