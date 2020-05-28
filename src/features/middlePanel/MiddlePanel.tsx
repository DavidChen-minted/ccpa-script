import React, { FC } from 'react';
import { css } from '@emotion/core';
import NavigationTab from 'features/navigationTab/NavigationTab';
import Questionnaire from 'features/choiceControl/Questionnaire';
import VariableForm from 'features/variable/VariableForm';
import ScriptDisplay from 'features/scriptDisplay/ScriptDisplay';

const middlePanelStyles = css`
  width: 100%;
`;

const topBarStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const MiddlePanel: FC = () => {
  return (
    <div css={middlePanelStyles}>
      <div css={topBarStyles}>
        <NavigationTab />
        <VariableForm />
      </div>
      <Questionnaire />
      <ScriptDisplay />
    </div>
  );
};

export default MiddlePanel;
