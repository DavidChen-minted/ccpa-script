import { StepRecord, StepNode } from './types';

class StepNodeRecord {
  private record: StepRecord;

  public constructor(record: StepRecord = {}) {
    this.record = record;
  }

  public includes(stepNode: StepNode) {
    if (
      this.record[stepNode.scriptType] &&
      this.record[stepNode.scriptType][stepNode.stepId]
    ) {
      return true;
    }
    return false;
  }

  public add(stepNode: StepNode) {
    this.record[stepNode.scriptType] = this.record[stepNode.scriptType] || {};
    this.record[stepNode.scriptType][stepNode.stepId] = true;
  }
}

export default StepNodeRecord;
