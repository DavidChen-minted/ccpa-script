import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles from 'styles/sectionTitleStyles';

const ContentTableStyles = css`
  max-width: ${rem(400)};
  width: 30%;
`;

const ContentTable: FC = () => {
  return (
    <div css={ContentTableStyles}>
      <h3 css={sectionTitleStyles}>content table</h3>
    </div>
  );
};

export default ContentTable;
