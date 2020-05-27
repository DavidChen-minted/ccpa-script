import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles, {
  hoverRightStyles,
  hoverLeftStyles,
} from 'styles/sectionTitleStyles';
import BreakLine from 'styles/BreakLine';

const expandedScriptResultStyles = css`
  max-width: ${rem(500)};
  width: 30%;
  border-left: ${rem(1)} solid black;
  margin-left: ${rem(10)};
`;

const unexpandedScriptResultStyles = css`
  border-left: ${rem(1)} solid black;
  margin-left: ${rem(10)};
`;

const ScriptResult: FC = () => {
  const [expanded, setExpanded] = useState(true);
  return expanded ? (
    <div css={expandedScriptResultStyles}>
      <div>
        <button
          type="button"
          css={[sectionTitleStyles(expanded), hoverRightStyles]}
          onClick={() => {
            setExpanded(false);
          }}
        >
          {`\u25B6 script result`}
        </button>
      </div>

      <BreakLine />
    </div>
  ) : (
    <div css={unexpandedScriptResultStyles}>
      <button
        type="button"
        css={[sectionTitleStyles(expanded), hoverLeftStyles]}
        onClick={() => {
          setExpanded(true);
        }}
      >
        {`\u25C0`}
      </button>
    </div>
  );
};

export default ScriptResult;
