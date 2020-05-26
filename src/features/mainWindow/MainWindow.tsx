import React, { FC } from 'react';
import { css } from '@emotion/core';
import ContentTable from 'features/contentTable/ContentTable';
import ScriptDisplay from 'features/scriptDisplay/ScriptDisplay';
import ScriptResult from 'features/scriptResult/ScriptResult';

const mainWindowStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  & > div {
    border: 1px solid black;
  }
`;

const MainWindow: FC = () => {
  return (
    <div css={mainWindowStyles}>
      <ContentTable />
      <ScriptDisplay />
      <ScriptResult />
    </div>
  );
};

export default MainWindow;
