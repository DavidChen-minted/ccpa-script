import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSelectedChoiceId,
  GlobalChoiceControlState,
} from 'features/choiceControl/choiceControlSlice';
import { selectCurrentStepId } from 'features/step/selector';
import choiceControlAdapter from 'features/choiceControl/choiceControlEntity';
import { selectChoiceControl } from 'features/choiceControl/selector';
import ChoiceButton from './ChoiceButton';

const {
  selectById: selectChoiceControlById,
} = choiceControlAdapter.getSelectors(selectChoiceControl);

const ChoiceButtons: FC = () => {
  const stepId = useSelector(selectCurrentStepId) || '';
  const choiceControl = useSelector((state: GlobalChoiceControlState) =>
    selectChoiceControlById(state, stepId)
  );
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (choiceId: string) => {
      if (stepId) {
        dispatch(updateSelectedChoiceId({ stepId, choiceId }));
      }
    },
    [stepId, dispatch, updateSelectedChoiceId]
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
