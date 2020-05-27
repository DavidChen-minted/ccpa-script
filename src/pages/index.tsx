import React from 'react';
import { NextPage } from 'next';
import YamlParser from 'features/fileReader/YamlParser';
import pageTitleStyles from 'styles/pageTitleStyles';
import MainPanel from 'features/mainPanel/MainPanel';

const IndexPage: NextPage<{ [key in string]?: string }> = () => (
  <main>
    <h1 css={pageTitleStyles}>CCPA Script</h1>
    <YamlParser />
    <MainPanel />
  </main>
);

export default IndexPage;
