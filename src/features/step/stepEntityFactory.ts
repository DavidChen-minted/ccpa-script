import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Dependency {
  id: string;
  choice?: string;
  type?: string;
}

export interface Choice {
  id: string;
  label?: string;
  notes?: string;
}

export interface Choices {
  [key: string]: Choice;
}

export interface Script {
  db: string;
  snippets: string[];
}

export interface Step {
  description?: string;
  id: string;
  scriptType: string;
  order: number;
  script: Script;
  visible?: boolean;
  dependency?: Dependency;
  choices?: Choices;
}

export const instanceOfDependency = (object: any): object is Dependency => {
  if (typeof object?.id !== 'string') {
    return false;
  }
  if (object.choice !== undefined && typeof object.choice !== 'string') {
    return false;
  }
  if (object.type !== undefined && typeof object.type !== 'string') {
    return false;
  }
  return true;
};

export const instanceOfChoice = (object: any): object is Choice => {
  if (typeof object?.id !== 'string') {
    return false;
  }
  if (object.label !== undefined && typeof object.label !== 'string') {
    return false;
  }
  if (object.notes !== undefined && typeof object.notes !== 'string') {
    return false;
  }
  return true;
};

const stepAdapterFactory = () =>
  createEntityAdapter<Step>({
    selectId: (step) => step.id,
    sortComparer: (a, b) => a.order - b.order,
  });

export default stepAdapterFactory;
