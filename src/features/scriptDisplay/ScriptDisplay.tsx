import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { selectCurrentStepId } from 'features/step/selector';
import useSelectAllScripts from 'features/databaseScript/useSelectAllScripts';
import ScriptDisplayPerType from './ScriptDisplayPerType';

const scriptDisplayStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  & > * {
    width: 100%;
  }
`;

const ScriptDisplay: FC = () => {
  const currentStepId = useSelector(selectCurrentStepId);
  const allScripts = useSelectAllScripts();
  const scripts = useMemo(() => {
    if (!currentStepId) {
      return undefined;
    }
    return Object.keys(allScripts).map(
      (type) => allScripts[type][currentStepId]
    );
  }, [currentStepId, allScripts]);
  return (
    <div css={scriptDisplayStyles}>
      {scripts?.map((s) => {
        const {
          id = '',
          db = '',
          script = '',
          scriptType = '',
          description = '',
        } = s || {};
        return (
          <ScriptDisplayPerType
            key={`script-${id}-${scriptType}`}
            db={db}
            description={description}
            script={script}
            scriptType={scriptType}
          />
        );
      })}
    </div>
  );
};

export default ScriptDisplay;
