import React, { FC } from 'react';
import { css } from '@emotion/core';

const ScriptDisplayStyles = css`
  width: 100%;
`;

const ScriptDisplay: FC = () => {
  return <div css={ScriptDisplayStyles}>Display</div>;
};

export default ScriptDisplay;
