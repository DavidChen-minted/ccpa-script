import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Choice } from 'features/choiceControl/choiceControlEntity';
import rem from 'utils/style/rem';
import constants from 'styles/constants';

interface Props {
  choice: Choice;
  selected?: boolean;
  onClick?: (id: string, notes?: string) => void;
}

const choiceButtonRowStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const choiceButtonStyles = css`
  cursor: pointer;
  display: flex;
  font-size: ${rem(16)};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: ${rem(12)} ${rem(8)};
  height: ${rem(constants.BUTTON_HEIGHT)};
  border: ${rem(1)} solid black;
  & > * {
    margin: ${rem(5)};
  }
  & > div {
    margin-left: ${rem(10)};
  }
  & > p {
    margin-right: ${rem(10)};
  }
  &:hover {
    border-color: blue;
    background-color: #dcdcdc;
    color: blue;
  }
  &:active {
    background-color: transparent;
    color: black;
  }
`;

const radioCharacterStyles = (selected = false) => css`
  border-radius: 50%;
  border: ${rem(1)} solid black;
  ${selected && `background-color: black`};
  width: ${rem(10)};
  height: ${rem(10)};
`;

const ChoiceButton: FC<Props> = ({ choice, selected = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(choice.id, choice.notes);
    }
  };
  return (
    <div css={choiceButtonRowStyles}>
      <button type="button" onClick={handleClick} css={choiceButtonStyles}>
        <div css={radioCharacterStyles(selected)} />
        <p>{choice.label || choice.id}</p>
      </button>
      <p>{choice.notes ? `- ${choice.notes}` : ''}</p>
    </div>
  );
};

export default ChoiceButton;
