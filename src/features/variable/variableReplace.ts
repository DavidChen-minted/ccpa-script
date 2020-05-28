// This module detects and replace variables identified with double curly brackets "{{var}}"
import { Variable } from './variableEntity';

interface ReplaceVariableArgs extends Pick<Variable, 'id' | 'value'> {
  text: string;
}

interface ReplaceVariablesArgs {
  variables?: Variable[];
  text: string;
}

const variableRegex = /\{\{[^{}]*\}\}/;

export const detectReplaceableVariable = (text: string) =>
  variableRegex.test(text);

export const replaceVariable = ({ text, id, value }: ReplaceVariableArgs) => {
  const search = `{{${id}}}`;
  return value ? text.replace(search, value) : text;
};

export const replaceVariables = ({
  text,
  variables = [],
}: ReplaceVariablesArgs) =>
  variables.reduce(
    (result, { id, value }) => replaceVariable({ text: result, id, value }),
    text
  );
