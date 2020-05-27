import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Step } from 'features/step/stepEntity';
import rem from 'utils/style/rem';
import getStepLabel from 'features/step/getStepLabel';

interface Props extends Pick<Step, 'id' | 'order' | 'visible'> {
  selected: boolean;
  onClick?: (id: string) => void;
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
      text-decoration: underline;
    }
  `};
`;

const ContentTableItem: FC<Props> = ({
  id,
  order,
  visible,
  selected,
  onClick,
}) => {
  const content = getStepLabel({ id, order });
  const handleClick = () => {
    if (id && onClick) {
      onClick(id);
    }
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
