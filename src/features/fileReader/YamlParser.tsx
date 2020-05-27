import React, { FC, useState } from 'react';
import useImportData from 'features/dataImport/useImportData';
import YamlFileInput from './YamlFileInput';

const YamlParser: FC = () => {
  const [yamlData, setYamlData] = useState<any>(undefined);

  useImportData(yamlData);
  return yamlData ? null : <YamlFileInput callbackOnLoad={setYamlData} />;
};

export default YamlParser;
