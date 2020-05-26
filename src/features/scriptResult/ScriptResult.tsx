import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles from 'styles/sectionTitleStyles';

const scriptResultStyles = css`
  max-width: ${rem(500)};
  width: 30%;
`;

const ScriptResult: FC = () => {
  return (
    <div css={scriptResultStyles}>
      <h3 css={sectionTitleStyles}>script result</h3>
    </div>
  );
};

export default ScriptResult;
