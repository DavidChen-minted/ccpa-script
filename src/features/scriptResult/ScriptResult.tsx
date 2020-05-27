import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles from 'styles/sectionTitleStyles';
import BreakLine from 'styles/BreakLine';

const scriptResultStyles = css`
  max-width: ${rem(500)};
  width: 30%;
  border-left: 1px solid black;
  margin-left: ${rem(10)};
`;

const ScriptResult: FC = () => {
  return (
    <div css={scriptResultStyles}>
      <h3 css={sectionTitleStyles}>script result</h3>
      <BreakLine />
    </div>
  );
};

export default ScriptResult;
