import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles from 'styles/sectionTitleStyles';
import BreakLine from 'styles/BreakLine';

const ContentTableStyles = css`
  max-width: ${rem(400)};
  width: 30%;
  border-right: 1px solid black;
  margin-right: ${rem(10)};
`;

const ContentTable: FC = () => {
  return (
    <div css={ContentTableStyles}>
      <h3 css={sectionTitleStyles}>content table</h3>
      <BreakLine />
    </div>
  );
};

export default ContentTable;
