import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import transition from 'utils/style/transition';

const sectionTitleStyles = (expanded = true) => css`
  display: block;
  color: ${expanded ? 'black' : 'gray'};
  font-size: ${rem(20)};
  text-align: center;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  margin: ${rem(10)} auto;
  ${transition()('left')};
  &:hover {
    color: ${expanded ? 'gray' : 'black'};
    position: relative;
  }
`;

export const hoverLeftStyles = css`
  &:hover {
    left: -${rem(5)};
  }
`;

export const hoverRightStyles = css`
  &:hover {
    left: ${rem(5)};
  }
`;

export default sectionTitleStyles;
