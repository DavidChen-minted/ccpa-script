import isEqual from 'lodash/isEqual';
import { Dependency } from './dependencyCheckEntity';

const isIncludedInDependencyArray = (
  dependency: Dependency,
  array: Dependency[]
) => array.some((node) => isEqual(node, dependency));

export default isIncludedInDependencyArray;
