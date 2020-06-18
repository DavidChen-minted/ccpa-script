/* eslint-disable no-param-reassign */
import { ScriptSnippetsToImport } from 'features/scriptSnippet/scriptSnippetSlice';

export const combineSnippetsAtImport = ({
  snippets,
  snippetsObj,
}: {
  snippets: string[];
  snippetsObj?: ScriptSnippetsToImport;
}): string | undefined =>
  snippetsObj &&
  snippets.reduce((script, id) => {
    script += snippetsObj[id];
    return script;
  }, '');

export const combineScript = () => {};
