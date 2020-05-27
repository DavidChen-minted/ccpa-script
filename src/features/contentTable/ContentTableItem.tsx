import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Step } from 'features/step/stepEntity';
import rem from 'utils/style/rem';
import { useDispatch } from 'react-redux';
import { changeCurrentStepId } from 'features/step/stepSlice';
import getStepLabel from 'features/step/getStepLabel';

interface Props extends Pick<Step, 'id' | 'order' | 'visible'> {
  selected: boolean;
}

const contentTableItemStyles = (visible = false, selected = false) => css`
  font-size: ${rem(18)};
  ${selected && 'font-weight: bold; font-style: italic;'};
  margin: ${rem(5)};

  ${visible &&
  `
    font-family: inherent;
    text-align: left;
    color: blue;
    cursor: pointer;
    &:hover {
      color: red;
    }
  `};
`;

const ContentTableItem: FC<Props> = ({ id, order, visible, selected }) => {
  const content = getStepLabel({ id, order });
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeCurrentStepId(id));
  };

  return visible ? (
    <button
      type="button"
      css={contentTableItemStyles(visible, selected)}
      onClick={handleClick}
    >
      {content}
    </button>
  ) : (
    <p css={contentTableItemStyles(visible, selected)}>{content}</p>
  );
};

export default ContentTableItem;
