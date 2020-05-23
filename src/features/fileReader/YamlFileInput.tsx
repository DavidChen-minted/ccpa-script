import React, { FC, ChangeEvent } from 'react';
import { safeLoad } from 'js-yaml';
import readAsText from 'utils/common/readAsText';

export interface Props {
  callbackOnLoad?: (data: any) => void;
}

const YamlFileInput: FC<Props> = ({ callbackOnLoad }) => {
  const handleFileClick = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0];
    const text = await readAsText(file);
    if (typeof text !== 'string') {
      throw new Error('no readable text');
    }
    const data = safeLoad(text);
    if (!data) {
      throw new Error('no yaml file recognized');
    }
    if (callbackOnLoad) {
      callbackOnLoad(data);
    }
  };

  return (
    <div>
      <input type="file" id="input-yaml-file" onChange={handleFileClick} />
    </div>
  );
};

export default YamlFileInput;
