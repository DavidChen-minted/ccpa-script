const readAsText = (file: Blob): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsText(file);
  });

export default readAsText;
