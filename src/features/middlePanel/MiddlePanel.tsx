import React, { FC } from 'react';
import { css } from '@emotion/core';
import NavigationTab from 'features/navigationTab/NavigationTab';
import ScriptDisplay from 'features/scriptDisplay/ScriptDisplay';
import VariableForm from 'features/variable/VariableForm';

const MiddlePanelStyles = css`
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
    <div css={MiddlePanelStyles}>
      <div css={topBarStyles}>
        <NavigationTab />
        <VariableForm />
      </div>
      <ScriptDisplay />
    </div>
  );
};

export default MiddlePanel;
