import React, { FC, useState, useMemo, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import { selectNotes } from 'features/notes/selector';
import notesAdapter from 'features/notes/notesEntity';
import { selectScriptResult } from './selector';
import scriptResultAdapter from './scriptResultEntity';

const selectStyles = css`
  font-size: ${rem(16)};
  margin: ${rem(10)} auto ${rem(15)};
  display: block;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
`;

const notesMessageStyles = css`
  font-size: ${rem(16)};
  margin: ${rem(5)};
`;

const { selectIds: selectScriptResultIds } = scriptResultAdapter.getSelectors(
  selectScriptResult
);

const { selectAll: selectAllNotes } = notesAdapter.getSelectors(selectNotes);

const ResultSelect: FC = () => {
  const [selection, setSelection] = useState('notes');
  const scriptResultIds = useSelector(selectScriptResultIds) as string[];
  const options = useMemo(() => ['notes', ...scriptResultIds], [
    scriptResultIds,
  ]);
  const notes = useSelector(selectAllNotes);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelection(e.target.value);
  };
  return (
    <div>
      <div>
        <select value={selection} onChange={handleChange} css={selectStyles}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {selection === 'notes' ? (
        <div>
          {notes.map((note, index) => (
            <div key={`notes-${note.stepId}`} css={notesMessageStyles}>
              {`${index + 1}. ${note.notes}`}
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ResultSelect;
