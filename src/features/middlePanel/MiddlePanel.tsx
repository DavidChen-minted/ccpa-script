import React, { FC } from 'react';
import { css } from '@emotion/core';
import NavigationTab from 'features/navigationTab/NavigationTab';
import ScriptDisplay from 'features/scriptDisplay/ScriptDisplay';

const MiddlePanelStyles = css`
  width: 100%;
`;

const MiddlePanel: FC = () => {
  return (
    <div css={MiddlePanelStyles}>
      <NavigationTab />
      <ScriptDisplay />
    </div>
  );
};

export default MiddlePanel;
