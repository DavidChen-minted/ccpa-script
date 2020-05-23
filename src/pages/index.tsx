import React from 'react';
import { NextPage } from 'next';
import YamlFileInput from 'features/fileReader/YamlFileInput';

const IndexPage: NextPage<{ [key in string]?: string }> = () => (
  <main>
    <YamlFileInput callbackOnLoad={console.log} />
  </main>
);

export default IndexPage;
