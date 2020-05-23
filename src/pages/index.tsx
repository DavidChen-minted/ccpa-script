import React from 'react';
import { NextPage } from 'next';
import JsonFileInput from 'features/fileReader/JsonFileInput';

const IndexPage: NextPage<{ [key in string]?: string }> = () => (
  <main>
    <JsonFileInput />
  </main>
);

export default IndexPage;
