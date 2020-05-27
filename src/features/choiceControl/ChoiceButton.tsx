import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Choice } from 'features/choiceControl/choiceControlEntity';
import rem from 'utils/style/rem';

interface Props {
  choice: Choice;
  selected?: boolean;
  onClick?: (id: string) => void;
}

const choiceButtonStyles = css`
  cursor: pointer;
  display: flex;
  font-size: ${rem(16)};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: ${rem(12)} ${rem(8)};
  height: ${rem(36)};
  border: ${rem(1)} solid black;
  & > * {
    margin: ${rem(5)};
  }
`;

const radioCharacterStyles = (selected = false) => css`
  border-radius: 50%;
  border: ${rem(1)} solid black;
  ${selected && `background-color: black`};
  width: ${rem(16)};
  height: ${rem(16)};
`;

const ChoiceButton: FC<Props> = ({ choice, selected = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(choice.id);
    }
  };
  return (
    <button type="button" onClick={handleClick} css={choiceButtonStyles}>
      <div css={radioCharacterStyles(selected)} />
      <p>
        {`${choice.label || choice.id}${
          choice.notes ? ` (${choice.notes})` : ''
        }`}
      </p>
    </button>
  );
};

export default ChoiceButton;
