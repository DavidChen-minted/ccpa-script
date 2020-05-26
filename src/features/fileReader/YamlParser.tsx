import React, { FC, useState } from 'react';
import useImportData from 'features/dataImport/useImportData';
import YamlFileInput from './YamlFileInput';

const YamlParser: FC = () => {
  const [yamlData, setYamlData] = useState<any>(undefined);

  useImportData(yamlData);
  return <YamlFileInput callbackOnLoad={setYamlData} />;
};

export default YamlParser;
