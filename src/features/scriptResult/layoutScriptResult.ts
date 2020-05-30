import { ScriptResult } from './scriptResultEntity';

const layoutScriptResult = ({
  scriptTypes,
  scriptDatabase,
}: {
  scriptTypes: string[];
  scriptDatabase: string[];
}): ScriptResult[] =>
  scriptTypes.reduce<ScriptResult[]>((array, scriptType, index) => {
    if (index === 0) {
      return array;
    }
    scriptDatabase.forEach((db) => {
      array.push({ scriptDatabase: db, scriptType });
    });
    return array;
  }, []);

export default layoutScriptResult;
