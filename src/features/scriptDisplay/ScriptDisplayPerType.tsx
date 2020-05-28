import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import ScriptInput from './ScriptInput';

interface Props {
  description: string;
  scriptType: string;
  db: string;
  script: string;
}

const scriptTypeStyles = css`
  font-size: ${rem(18)};
  font-weight: bold;
`;

const scriptDescriptionStyles = css`
  font-size: ${rem(18)};
`;

const scriptDisplayPerTypeStyles = css`
  margin: ${rem(20)} ${rem(15)};
  & > div {
    margin: ${rem(10)} 0;
  }
`;

const ScriptDisplayPerType: FC<Props> = ({
  scriptType = '',
  db = '',
  script = '',
  description = '',
}) => {
  return (
    <div css={scriptDisplayPerTypeStyles}>
      <div css={scriptTypeStyles}>{`${scriptType}:`}</div>
      <div css={scriptDescriptionStyles}>{description}</div>
      <ScriptInput script={script} db={db} />
    </div>
  );
};

export default ScriptDisplayPerType;
