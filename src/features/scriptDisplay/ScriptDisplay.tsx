import React, { FC } from 'react';
import { css } from '@emotion/core';
import sectionTitleStyles from 'styles/sectionTitleStyles';

const ScriptDisplayStyles = css`
  width: 100%;
`;

const ScriptDisplay: FC = () => {
  return (
    <div css={ScriptDisplayStyles}>
      <h3 css={sectionTitleStyles}>Display</h3>
    </div>
  );
};

export default ScriptDisplay;
