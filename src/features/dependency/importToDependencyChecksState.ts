/* eslint-disable no-param-reassign */
import dependencyCheckAdapter, {
  DependencyCheck,
} from './dependencyCheckEntity';
import { DependencyChecksState } from './dependencyCheckSlice';

export interface ParsedDependencyChecks {
  [key: string]: DependencyCheck[];
}

export interface ImportToDependencyChecksStateArgs {
  dependencyChecks?: ParsedDependencyChecks;
  types: string[];
}

const importToDependencyChecksState = ({
  dependencyChecks,
  types,
}: ImportToDependencyChecksStateArgs) =>
  dependencyChecks &&
  types.reduce<DependencyChecksState>((obj, scriptType) => {
    obj[scriptType] = dependencyCheckAdapter.setAll(
      dependencyCheckAdapter.getInitialState(),
      dependencyChecks[scriptType]
    );
    return obj;
  }, {});

export default importToDependencyChecksState;
