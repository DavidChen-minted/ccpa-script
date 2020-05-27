/* eslint-disable no-param-reassign */
import { Dependency, instanceOfDependency } from 'features/step/stepEntity';
import {
  Choice,
  Choices,
  ChoiceControl,
  instanceOfChoice,
} from 'features/choiceControl/choiceControlEntity';
import { ParsedSteps } from 'features/step/stepSlice';

export interface StepToImport {
  description?: string;
  choices?: (string | Choice)[];
  script: {
    db: string;
    snippets: string[];
  };
  dependency?: Dependency;
}

export interface StepsToImport {
  id: string;
  visible?: boolean;
  [key: string]: string | boolean | undefined | StepToImport;
}

export interface ParseStepsToImportArgs {
  steps?: StepsToImport[];
  types: string[];
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
  if (
    object.dependency !== undefined &&
    !instanceOfDependency(object.dependency)
  ) {
    return false;
  }
  if (object.choices !== undefined) {
    if (!Array.isArray(object.choices)) {
      return false;
    }
    for (let i = 0; i < object.choices.length; i += 1) {
      if (
        typeof object.choices[i] !== 'string' ||
        instanceOfChoice(object.choices[i])
      ) {
        return false;
      }
    }
  }
  return true;
};

const parseStepsToImport = ({ types, steps }: ParseStepsToImportArgs) => {
  if (!(steps && Array.isArray(steps) && types && Array.isArray(types))) {
    return null;
  }
  const parsedSteps: ParsedSteps = {};
  const choiceControl: ChoiceControl[] = [];
  types.forEach((scriptType, scriptIndex) => {
    parsedSteps[scriptType] = parsedSteps[scriptType] || [];
    const isFirst = scriptIndex === 0;
    steps.forEach(({ id, visible: visibleInput, ...stepsByType }, index) => {
      const visible = !(visibleInput === false);
      const stepToImport = stepsByType[scriptType];
      if (!instanceOfStepToImport(stepToImport)) {
        return;
      }
      const description = stepToImport.description?.slice(0, -1);
      if (isFirst && !!visible) {
        let choices: Choices | undefined;
        if (stepToImport.choices && Array.isArray(stepToImport.choices)) {
          choices = stepToImport.choices.reduce<Choices>((obj, choice) => {
            if (typeof choice === 'string') {
              obj[choice] = { id: choice };
            } else {
              obj[choice.id] = choice;
            }
            return obj;
          }, {});
        } else {
          choices = {
            yes: { id: 'yes' },
            no: { id: 'no' },
          };
        }
        choiceControl.push({ id, choices });
      }
      parsedSteps[scriptType].push({
        id,
        visible,
        scriptType,
        order: index,
        description,
        script: stepToImport.script,
        dependency: stepToImport.dependency,
      });
    });
  });
  return { parsedSteps, choiceControl };
};

export default parseStepsToImport;
