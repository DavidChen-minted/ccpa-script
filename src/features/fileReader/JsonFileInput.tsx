import React, { FC, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  GlobalscriptSnippetState,
  scriptSnippetReceived,
} from 'features/snippet/scriptSnippetSlice';
import scriptSnippetAdapter from 'features/snippet/sciptSnippetEntity';
import readAsText from 'utils/common/readAsText';

const {
  selectEntities: selectScriptSnippets,
} = scriptSnippetAdapter.getSelectors(
  (state: GlobalscriptSnippetState) => state.scriptSnippet
);

const JsonFileInput: FC = () => {
  const snippets = useSelector(selectScriptSnippets);
  const dispatch = useDispatch();

  const handleFileClick = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0];
    const text = await readAsText(file);
    if (typeof text !== 'string') {
      throw new Error('no readable text');
    }
    const data = JSON.parse(text);
    if (data.snippets) {
      dispatch(scriptSnippetReceived(data.snippets));
    }
  };

  return (
    <div>
      <input type="file" id="input-json-file" onChange={handleFileClick} />
      <p>{JSON.stringify(snippets)}</p>
    </div>
  );
};

export default JsonFileInput;
