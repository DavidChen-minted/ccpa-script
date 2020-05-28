import React, { FC, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import { selectCurrentStepId } from 'features/step/selector';
import useSelectAllScripts from 'features/databaseScript/useSelectAllScripts';
import { updateScript } from 'features/databaseScript/databaseScriptSlice';
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
  const dispatch = useDispatch();
  const handleChangeClick = ({
    id,
    scriptType,
  }: {
    id: string;
    scriptType: string;
  }) => (script: string) => {
    dispatch(updateScript({ id, scriptType, script }));
  };
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
            onChangeClick={handleChangeClick({ id, scriptType })}
          />
        );
      })}
    </div>
  );
};

export default ScriptDisplay;
