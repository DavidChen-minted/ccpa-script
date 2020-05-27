import React, { FC } from 'react';
import { css } from '@emotion/core';
import ContentTable from 'features/contentTable/ContentTable';
import ScriptResult from 'features/scriptResult/ScriptResult';
import rem from 'utils/style/rem';
import useScreenHeight from 'utils/customHook/useScreenHeight';
import MiddlePanel from 'features/middlePanel/MiddlePanel';

const mainPanelStyles = (height = 0, marginBottom = 20) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: calc(${rem(height) || '100%'} - ${rem(marginBottom)});
  margin: ${rem(20)} 0 ${rem(marginBottom)};
`;

const MainPanel: FC = () => {
  const { height, measureRef } = useScreenHeight();

  return (
    <div css={mainPanelStyles(height)} ref={measureRef}>
      <ContentTable />
      <MiddlePanel />
      <ScriptResult />
    </div>
  );
};

export default MainPanel;
