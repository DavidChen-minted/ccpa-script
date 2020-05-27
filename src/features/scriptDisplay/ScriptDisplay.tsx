import React, { FC } from 'react';
import { css } from '@emotion/core';
import NavigationTab from 'features/navigationTab/NavigationTab';

const ScriptDisplayStyles = css`
  width: 100%;
`;

const ScriptDisplay: FC = () => {
  return (
    <div css={ScriptDisplayStyles}>
      <NavigationTab />
    </div>
  );
};

export default ScriptDisplay;
