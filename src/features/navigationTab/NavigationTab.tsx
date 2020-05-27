import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentStepId,
  selectCheckScriptStep,
} from 'features/step/selector';
import stepAdapter from 'features/step/stepEntity';
import {
  getPrevVisibleStepId,
  getNextVisibleStepId,
} from 'features/step/getStepId';
import getStepLabel from 'features/step/getStepLabel';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import { changeCurrentStepId } from 'features/step/stepSlice';
import NavigationTabItem from './NavigationTabItem';

const arrows = ['\u25B2 ', '', '\u25BC '];

const navigationTabStyles = css`
  margin-bottom: ${rem(10)};
`;

const {
  selectEntities: selectStepEntities,
  selectIds: selectStepIds,
} = stepAdapter.getSelectors(selectCheckScriptStep);

const NavigationTab: FC = () => {
  const currentStepId = useSelector(selectCurrentStepId);
  const ids = useSelector(selectStepIds);
  const entities = useSelector(selectStepEntities);

  const prevStepId = getPrevVisibleStepId({
    ids,
    entities,
    endId: currentStepId,
  });
  const nextStepId = getNextVisibleStepId({
    ids,
    entities,
    startId: currentStepId,
  });

  const dispatch = useDispatch();
  const handleClick = useCallback(
    (id: string) => {
      dispatch(changeCurrentStepId(id));
    },
    [dispatch, changeCurrentStepId]
  );

  return (
    <div css={navigationTabStyles}>
      {[prevStepId, currentStepId, nextStepId].map((id, index) => {
        if (id && entities[id]) {
          const step = entities[id];
          return (
            <NavigationTabItem
              key={`${index}-${id}`}
              current={index === 1}
              label={`${arrows[index]}${getStepLabel(step!)}`}
              id={id}
              onClick={handleClick}
            />
          );
        }
        return (
          <NavigationTabItem
            key={`${index}-${id}`}
            current={index === 1}
            label={arrows[index]}
          />
        );
      })}
    </div>
  );
};

export default NavigationTab;
