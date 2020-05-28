import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import ScriptInput from './ScriptInput';

interface Props {
  description: string;
  col: number;
  scriptType: string;
  db: string;
  script: string;
  onChangeClick?: (script: string) => void;
  onReplaceClick?: (script: string) => string;
}

const gridPositionStyles = (row = 1, col = 1) => css`
  grid-row: ${row};
  grid-column: ${col};
`;

const scriptTypeStyles = css`
  font-size: ${rem(18)};
  font-weight: bold;
`;

const scriptDescriptionStyles = css`
  font-size: ${rem(18)};
`;

const ScriptDisplayPerType: FC<Props> = ({
  scriptType = '',
  db = '',
  col = 1,
  script = '',
  description = '',
  onChangeClick,
  onReplaceClick,
}) => {
  return (
    <>
      <div css={[scriptTypeStyles, gridPositionStyles(1, col)]}>
        {scriptType ? `${scriptType}:` : ''}
      </div>
      <div css={[scriptDescriptionStyles, gridPositionStyles(2, col)]}>
        {description}
      </div>
      <ScriptInput
        styles={gridPositionStyles(3, col)}
        script={script}
        db={db}
        onChangeClick={onChangeClick}
        onReplaceClick={onReplaceClick}
      />
    </>
  );
};

export default ScriptDisplayPerType;
