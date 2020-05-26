/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, EntityState } from '@reduxjs/toolkit';
import stepAdapterFactory, {
  Step,
  Choice,
  Choices,
  Dependency,
  instanceOfDependency,
  instanceOfChoice,
} from './stepEntityFactory';

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

export interface ImportActionPayload {
  steps?: StepsToImport[];
  types: string[];
}

export interface StepState {
  [key: string]: EntityState<Step>;
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

const stepSlice = createSlice({
  name: 'step',
  initialState: {} as StepState,
  reducers: {
    importSteps: (state, action: PayloadAction<ImportActionPayload>) => {
      if (
        !(
          action.payload.steps &&
          Array.isArray(action.payload.steps) &&
          action.payload.types &&
          Array.isArray(action.payload.types)
        )
      ) {
        return state;
      }
      const parsedSteps: { [key: string]: Step[] } = {};
      action.payload.types.forEach((scriptType, scriptIndex) => {
        parsedSteps[scriptType] = parsedSteps[scriptType] || [];
        const isFirst = scriptIndex === 0;
        action.payload.steps!.forEach(
          ({ id, visible, ...stepsByType }, index) => {
            const stepToImport = stepsByType[scriptType];
            if (!instanceOfStepToImport(stepToImport)) {
              return;
            }
            let choices: Choices | undefined;
            if (isFirst) {
              if (stepToImport.choices && Array.isArray(stepToImport.choices)) {
                choices = stepToImport.choices.reduce<Choices>(
                  (obj, choice) => {
                    if (typeof choice === 'string') {
                      obj[choice] = { id: choice };
                    } else {
                      obj[choice.id] = choice;
                    }
                    return obj;
                  },
                  {}
                );
              } else {
                choices = {
                  yes: { id: 'yes' },
                  no: { id: 'no' },
                };
              }
            }
            parsedSteps[scriptType].push({
              id,
              visible,
              scriptType,
              order: index,
              description: stepToImport.description,
              script: stepToImport.script,
              dependency: stepToImport.dependency,
              choices,
            });
          }
        );
      });
      const newState = action.payload.types.reduce<StepState>(
        (obj, scriptType) => {
          const adapter = stepAdapterFactory();
          obj[scriptType] = adapter.setAll(
            adapter.getInitialState(),
            parsedSteps[scriptType]
          );
          return obj;
        },
        {}
      );
      return newState;
    },
  },
});

export default stepSlice.reducer;

export interface GlobalStepState {
  step: StepState;
}

export const { importSteps } = stepSlice.actions;
