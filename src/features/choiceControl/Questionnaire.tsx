import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useSelector } from 'react-redux';
import stepAdapter from 'features/step/stepEntity';
import {
  selectCheckScriptStep,
  selectCurrentStepId,
} from 'features/step/selector';
import rem from 'utils/style/rem';
import ChoiceButtons from './ChoiceButtons';

const questionnaireStyles = css`
  width: 100%;
  margin: ${rem(8)};
`;

const stepDescriptionTitleStyles = css`
  font-size: ${rem(20)};
  text-align: left;
`;

const { selectEntities: selectStepEntities } = stepAdapter.getSelectors(
  selectCheckScriptStep
);

const Questionnaire: FC = () => {
  const stepEntities = useSelector(selectStepEntities);
  const currentStepId = useSelector(selectCurrentStepId);
  return (
    <div css={questionnaireStyles}>
      <h2 css={stepDescriptionTitleStyles}>
        {stepEntities[currentStepId || '']?.description}
      </h2>
      <ChoiceButtons />
    </div>
  );
};

export default Questionnaire;
