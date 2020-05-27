import React, { FC } from 'react';
import { css } from '@emotion/core';
import ContentTable from 'features/contentTable/ContentTable';
import ScriptDisplay from 'features/scriptDisplay/ScriptDisplay';
import ScriptResult from 'features/scriptResult/ScriptResult';
import rem from 'utils/style/rem';
import useScreenHeight from 'utils/customHook/useScreenHeight';

const mainWindowStyles = (height = 0, marginBottom = 20) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: calc(${rem(height) || '100%'} - ${rem(marginBottom)});
  margin: ${rem(20)} 0 ${rem(marginBottom)};
`;

const MainWindow: FC = () => {
  const { height, measureRef } = useScreenHeight();

  return (
    <div css={mainWindowStyles(height)} ref={measureRef}>
      <ContentTable />
      <ScriptDisplay />
      <ScriptResult />
    </div>
  );
};

export default MainWindow;
