import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';

const breakLineStyles = css`
  width: calc(100% - 2 * ${rem(5)});
  border-top: ${rem(1)} solid black;
  margin: ${rem(5)};
`;

const BreakLine: FC = () => <div css={breakLineStyles} />;

export default BreakLine;
