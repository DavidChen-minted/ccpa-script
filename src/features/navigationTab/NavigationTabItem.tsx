import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import { useDispatch } from 'react-redux';
import { changeCurrentStepId } from 'features/step/stepSlice';

interface Props {
  current?: boolean;
  label: string;
  id?: string;
}

const navigationTabItemStyles = (current = false) => css`
  font-size: ${current ? rem(24) : rem(18)};
  margin: ${rem(8)};
  font-family: inherent;

  ${!current &&
  `
    text-align: left;
    color: blue;
    cursor: pointer;
    &:hover {
      color: red;
    }
  `};
`;

const NavigationTabItem: FC<Props> = ({ current = false, label, id = '' }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (id) {
      dispatch(changeCurrentStepId(id));
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
