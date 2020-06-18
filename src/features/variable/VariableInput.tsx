import React, { FC, ChangeEvent } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';

interface Props {
  id: string;
  value?: string;
  description?: string;
  onChange?: (variable: { id: string; value: string }) => void;
}

const variableInputStyles = css`
  margin: ${rem(4)} 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > * {
    margin: 0 ${rem(8)};
  }
`;

const VariableInput: FC<Props> = ({ id, value, description, onChange }) => {
  const placeholder = description || id || '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    if (onChange) {
      onChange({ id, value: newValue });
    }
  };
  return (
    <label
      htmlFor={`input-${id}`}
      css={variableInputStyles}
      title={description}
    >
      {`${id}:`}
      <input
        type="text"
        id={`input-${id}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default VariableInput;
