import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';

interface Props {
  current?: boolean;
  label: string;
  id?: string;
  onClick?: (id: string) => void;
}

const navigationTabItemStyles = (current = false) => css`
  font-size: ${current ? rem(20) : rem(14)};
  margin: ${rem(4)};
  font-family: inherit;
  font-weight: bold;

  ${!current &&
  `
    font-weight: normal;
    text-align: left;
    color: blue;
    cursor: pointer;
    &:hover {
      color: red;
    }
  `};
`;

const NavigationTabItem: FC<Props> = ({
  current = false,
  label,
  id = '',
  onClick,
}) => {
  const handleClick = () => {
    if (id && onClick) {
      onClick(id);
    }
  };
  return !current ? (
    <button
      type="button"
      css={navigationTabItemStyles(false)}
      onClick={handleClick}
    >
      {label}
    </button>
  ) : (
    <div css={navigationTabItemStyles(true)}>{label}</div>
  );
};

export default NavigationTabItem;
