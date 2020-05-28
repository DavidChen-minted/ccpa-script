import React, { FC, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import { selectCurrentStepId } from 'features/step/selector';
import useSelectAllScripts from 'features/databaseScript/useSelectAllScripts';
import { updateScript } from 'features/databaseScript/databaseScriptSlice';
import variableAdapter from 'features/variable/variableEntity';
import { selectVariable } from 'features/variable/selector';
import { replaceVariables } from 'features/variable/variableReplace';
import rem from 'utils/style/rem';
import ScriptDisplayPerType from './ScriptDisplayPerType';

const scriptDisplayStyles = (numCol = 1) => css`
  display: grid;
  grid-template-columns: repeat(${numCol}, 1fr);
  grid-template-rows: repeat(3, auto);
  justify-items: stretch;
  column-gap: ${rem(15)};
`;

const { selectAll: selectAllVariables } = variableAdapter.getSelectors(
  selectVariable
);

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
  const variables = useSelector(selectAllVariables);
  const handleReplaceClick = (script: string) =>
    replaceVariables({ text: script, variables });

  return (
    <div css={scriptDisplayStyles(scripts?.length)}>
      {scripts?.map((s, index) => {
        const {
          id = '',
          db = '',
          script = '',
          scriptType = '',
          description = '',
        } = s || {};
        return (
          <ScriptDisplayPerType
            key={`script-${index}-${id}-${scriptType}`}
            col={index + 1}
            db={db}
            description={description}
            script={script}
            scriptType={scriptType}
            onChangeClick={handleChangeClick({ id, scriptType })}
            onReplaceClick={handleReplaceClick}
          />
        );
      })}
    </div>
  );
};

export default ScriptDisplay;
