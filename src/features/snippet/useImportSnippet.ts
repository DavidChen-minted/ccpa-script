import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { scriptSnippetReceived } from './scriptSnippetSlice';

interface Snippets {
  [key: string]: string;
}

const useImportSnippets = (snippets?: Snippets) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!snippets) {
      return;
    }
    const parsedSnippets = Object.entries(snippets).map(([id, snippet]) => ({
      id,
      snippet,
    }));
    dispatch(scriptSnippetReceived(parsedSnippets));
  }, [snippets]);
};

export default useImportSnippets;
