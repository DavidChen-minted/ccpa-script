import React, { FC, useState, useEffect, ChangeEvent, useMemo } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import rem from 'utils/style/rem';
import constants from 'styles/constants';
import { detectReplaceableVariable } from 'features/variable/variableReplace';

interface Props {
  styles: SerializedStyles;
  script: string;
  db: string;
  onChangeClick?: (script: string) => void;
  onReplaceClick?: (script: string) => string;
}

const scriptInputStyles = css`
  display: flex;
  flex-direction: column;
  & > label {
    align-self: flex-end;
  }
`;

const textareaStyles = css`
  font-size: ${rem(16)};
  font-family: Helvetica;
  display: block;
  max-width: 100%;
  width: calc(100% - ${rem(6)});
  margin: ${rem(5)} 0 ${rem(15)};
  resize: vertical;
`;

const buttonAreaStyles = css`
  display: flex;
  align-self: flex-end;
  flex-direction: row-reverse;
  & > button {
    margin: 0 ${rem(5)};
    width: ${rem(constants.BUTTON_WIDTH)};
    height: ${rem(constants.BUTTON_HEIGHT)};
    border: ${rem(1)} solid black;
    display: block;
    cursor: pointer;
  }
  & > button:hover {
    color: blue;
    border-color: blue;
    background-color: #dcdcdc;
  }
  & > button:active {
    background-color: transparent;
    color: black;
  }
`;

const ScriptInput: FC<Props> = ({
  script,
  db,
  onChangeClick,
  onReplaceClick,
  styles,
}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(script);
  }, [script, setValue]);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleChangeClick = () => {
    if (onChangeClick) {
      onChangeClick(value);
    }
  };
  const handleCoptyToClipboardClick = () => {
    navigator.clipboard.writeText(value);
  };
  const handleDiscardClick = () => {
    setValue(script);
  };
  const handleReplaceClick = () => {
    if (onReplaceClick) {
      setValue(onReplaceClick(script));
    }
  };
  const variableReplaceable = useMemo(
    () => !!onReplaceClick && detectReplaceableVariable(value),
    [onReplaceClick, detectReplaceableVariable, value]
  );
  return (
    <div css={[scriptInputStyles, styles]}>
      <label htmlFor="script">{`db: ${db}`}</label>
      <textarea
        id="script"
        name="script"
        value={value}
        onChange={handleChange}
        css={textareaStyles}
        rows={10}
      />
      <div css={buttonAreaStyles}>
        <button type="button" onClick={handleCoptyToClipboardClick}>
          {`copy to \n clipboard`}
        </button>
        {variableReplaceable ? (
          <button type="button" onClick={handleReplaceClick}>
            replace
          </button>
        ) : undefined}
        {script !== value && onChangeClick ? (
          <button type="button" onClick={handleChangeClick}>
            change
          </button>
        ) : undefined}
        {script !== value ? (
          <button type="button" onClick={handleDiscardClick}>
            discard
          </button>
        ) : undefined}
      </div>
    </div>
  );
};

export default ScriptInput;
