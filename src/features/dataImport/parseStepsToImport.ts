/* eslint-disable no-param-reassign */
import {
  RawDependency,
  instanceOfRawDependency,
  Dependency,
} from 'features/dependency/types';
import dependencyCheckAdapter from 'features/dependency/dependencyCheckEntity';
import choiceControlAdapter, {
  Choice,
  Choices,
  instanceOfChoice,
} from 'features/choiceControl/choiceControlEntity';
import { StepsState } from 'features/step/stepSlice';
import { DatabaseScriptsState } from 'features/databaseScript/databaseScriptSlice';
import { ScriptSnippetsToImport } from 'features/scriptSnippet/scriptSnippetSlice';
import { combineSnippetsAtImport } from 'features/databaseScript/generateScript';
import removeNewlineAtEnd from 'utils/common/removeNewlineAtEnd';
import { DependencyChecksState } from 'features/dependency/dependencyCheckSlice';
import databaseScriptAdapter from 'features/databaseScript/databaseScriptEntity';
import stepAdapter from 'features/step/stepEntity';

export interface StepToImport {
  description?: string;
  choices?: (string | Choice)[];
  script?: {
    db: string;
    snippets: string[];
  };
  dependency?: RawDependency[];
}

export interface StepsToImport {
  id: string;
  visible?: boolean;
  [key: string]: string | boolean | undefined | StepToImport;
}

export interface ParseStepsToImportArgs {
  steps?: StepsToImport[];
  types: string[];
  snippets?: ScriptSnippetsToImport;
}

const instanceOfStepToImport = (object: any): object is StepToImport => {
  if (!(object?.script?.db && object?.script?.snippets)) {
    return false;
  }
  if (typeof object.script.db !== 'string') {
    return false;
  }
  if (!Array.isArray(object.script.snippets)) {
    return false;
  }
  for (let i = 0; i < object.script.snippets.length; i += 1) {
    if (typeof object.script.snippets[i] !== 'string') {
      return false;
    }
  }
  if (
    object.description !== undefined &&
    typeof object.description !== 'string'
  ) {
    return false;
  }
  if (object.dependency !== undefined) {
    if (!Array.isArray(object.dependency)) {
      return false;
    }
    for (let i = 0; i < object.dependency.length; i += 1) {
      if (!instanceOfRawDependency(object.dependency[i])) {
        return false;
      }
    }
  }
  if (object.choices !== undefined) {
    if (!Array.isArray(object.choices)) {
      return false;
    }
    for (let i = 0; i < object.choices.length; i += 1) {
      if (
        typeof object.choices[i] !== 'string' &&
        !instanceOfChoice(object.choices[i])
      ) {
        return false;
      }
    }
  }
  return true;
};

const parseStepsToImport = ({
  types,
  steps,
  snippets: snippetsObj,
}: ParseStepsToImportArgs) => {
  if (!(steps && Array.isArray(steps) && types && Array.isArray(types))) {
    return null;
  }
  const parsedSteps: StepsState = {};
  let parsedChoiceControl = choiceControlAdapter.getInitialState();
  const parsedDatabaseScripts: DatabaseScriptsState = {};
  const parsedDependencyChecks: DependencyChecksState = {};
  types.forEach((scriptType, scriptIndex) => {
    parsedSteps[scriptType] =
      parsedSteps[scriptType] || stepAdapter.getInitialState();
    parsedDatabaseScripts[scriptType] =
      parsedDatabaseScripts[scriptType] ||
      databaseScriptAdapter.getInitialState();
    parsedDependencyChecks[scriptType] =
      parsedDependencyChecks[scriptType] ||
      dependencyCheckAdapter.getInitialState();
    const isFirst = scriptIndex === 0;
    steps.forEach(({ id, visible: visibleInput, ...stepsByType }, index) => {
      const visible = !(visibleInput === false);
      const stepToImport = stepsByType[scriptType];
      if (!instanceOfStepToImport(stepToImport)) {
        return;
      }
      const description = removeNewlineAtEnd(stepToImport.description);
      if (isFirst && !!visible) {
        let choices: Choices | undefined;
        if (stepToImport.choices && Array.isArray(stepToImport.choices)) {
          choices = stepToImport.choices.reduce<Choices>((obj, choice) => {
            if (typeof choice === 'string') {
              obj[choice] = { id: choice };
            } else {
              obj[choice.id] = { ...choice };
              obj[choice.id].notes = removeNewlineAtEnd(choice.notes);
            }
            return obj;
          }, {});
        } else {
          choices = {
            yes: { id: 'yes' },
            no: { id: 'no' },
          };
        }
        parsedChoiceControl = choiceControlAdapter.addOne(parsedChoiceControl, {
          stepId: id,
          choices,
        });
      }
      parsedSteps[scriptType] = stepAdapter.addOne(parsedSteps[scriptType], {
        id,
        visible,
        scriptType,
        order: index,
        description,
      });
      if (stepToImport.script) {
        const { db, snippets } = stepToImport.script;
        const script = combineSnippetsAtImport({ snippets, snippetsObj });
        parsedDatabaseScripts[scriptType] = databaseScriptAdapter.addOne(
          parsedDatabaseScripts[scriptType],
          {
            stepId: id,
            scriptType,
            db,
            description,
            snippets,
            script,
          }
        );
      }
      if (stepToImport.dependency) {
        const dependency = stepToImport.dependency.map((node) => {
          if (!node.type) {
            [node.type] = types;
          }
          return node as Dependency;
        });
        parsedDependencyChecks[scriptType] = dependencyCheckAdapter.addOne(
          parsedDependencyChecks[scriptType],
          {
            stepId: id,
            dependency,
          }
        );
      }
    });
  });
  return {
    parsedSteps,
    parsedChoiceControl,
    parsedDatabaseScripts,
    parsedDependencyChecks,
  };
};

export default parseStepsToImport;
