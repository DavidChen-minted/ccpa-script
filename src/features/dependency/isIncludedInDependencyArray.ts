import isEqual from 'lodash/isEqual';
import { Dependency } from './types';

const isIncludedInDependencyArray = ({
  dependency,
  array,
}: {
  dependency: Dependency;
  array: Dependency[];
}) => array.some((node) => isEqual(node, dependency));

export default isIncludedInDependencyArray;
