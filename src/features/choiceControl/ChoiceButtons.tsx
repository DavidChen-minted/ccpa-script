import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSelectedChoiceId,
  GlobalChoiceControlState,
} from 'features/choiceControl/choiceControlSlice';
import {
  selectCurrentStepId,
  selectCheckScriptStep,
} from 'features/step/selector';
import choiceControlAdapter from 'features/choiceControl/choiceControlEntity';
import { selectChoiceControl } from 'features/choiceControl/selector';
import stepAdapter from 'features/step/stepEntity';
import { getNextVisibleStepId } from 'features/step/getStepId';
import { changeCurrentStepId } from 'features/step/stepSlice';
import { upsertNotes, removeNotes } from 'features/notes/notesSlice';
import ChoiceButton from './ChoiceButton';

const {
  selectById: selectChoiceControlById,
} = choiceControlAdapter.getSelectors(selectChoiceControl);

const {
  selectIds: selectStepIds,
  selectEntities: selectStepEntities,
} = stepAdapter.getSelectors(selectCheckScriptStep);

const ChoiceButtons: FC = () => {
  const stepId = useSelector(selectCurrentStepId) || '';
  const choiceControl = useSelector((state: GlobalChoiceControlState) =>
    selectChoiceControlById(state, stepId)
  );
  const ids = useSelector(selectStepIds);
  const entities = useSelector(selectStepEntities);

  const dispatch = useDispatch();
  const handleClick = useCallback(
    ({ id: choiceId, notes }: { id: string; notes?: string }) => {
      if (stepId) {
        dispatch(updateSelectedChoiceId({ stepId, choiceId }));
        if (notes) {
          dispatch(upsertNotes({ stepId, notes }));
        } else {
          dispatch(removeNotes(stepId));
        }
        const nextStepId = getNextVisibleStepId({
          ids,
          entities,
          startId: stepId,
        });
        if (nextStepId) {
          dispatch(changeCurrentStepId(nextStepId));
        }
      }
    },
    [
      stepId,
      dispatch,
      getNextVisibleStepId,
      ids,
      entities,
      updateSelectedChoiceId,
      upsertNotes,
      removeNotes,
      changeCurrentStepId,
    ]
  );
  return (
    <div>
      {Object.values(choiceControl?.choices ?? {}).map((choice) => (
        <ChoiceButton
          choice={choice}
          selected={choice.id === choiceControl?.selectedChoiceId}
          key={choice.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default ChoiceButtons;
