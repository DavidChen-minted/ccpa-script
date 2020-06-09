import { StepNode } from './types';

class DependencyQueue extends Array<StepNode> {
  private static findPredicate(targetNode: StepNode) {
    return function find(nodeToCheck: StepNode) {
      return (Object.keys(targetNode) as Array<keyof StepNode>).every(
        (key) => nodeToCheck[key] === targetNode[key]
      );
    };
  }

  public includes(stepNode: StepNode) {
    return super.some(DependencyQueue.findPredicate(stepNode));
  }

  public findStepNode(stepNode: StepNode) {
    return super.find(DependencyQueue.findPredicate(stepNode));
  }
}

export default DependencyQueue;
