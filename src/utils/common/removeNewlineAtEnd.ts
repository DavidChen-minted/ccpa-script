const newlineAtEndRegex = /(\r\n|\r|\n)+$/;

const removeNewlineAtEnd = (text?: string) =>
  text?.replace(newlineAtEndRegex, '');

export default removeNewlineAtEnd;
