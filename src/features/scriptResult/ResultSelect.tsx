import React, { FC, useState, useMemo, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import { selectNotes } from 'features/notes/selector';
import notesAdapter from 'features/notes/notesEntity';
import { changeCurrentStepId } from 'features/step/stepSlice';
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
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: blue;
  }
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
  const dispatch = useDispatch();
  const handleNotesMessageClick = (stepId: string) => () => {
    dispatch(changeCurrentStepId(stepId));
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
            <button
              type="button"
              key={`notes-${note.stepId}`}
              css={notesMessageStyles}
              onClick={handleNotesMessageClick(note.stepId)}
            >
              {`${index + 1}. ${note.notes}`}
            </button>
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ResultSelect;
