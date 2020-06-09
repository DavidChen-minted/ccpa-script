import reducer, {
  DependencyCheckState,
} from 'features/dependency/dependencyCheckSlice';

describe('dependencyCheckReducer', () => {
  it('should correctly resolve all dependency', () => {
    const mockState: DependencyCheckState = {
      dependencyChecks: {
        check: {
          ids: ['A', 'B', 'C'],
          entities: {
            A: {
              stepId: 'A',
              dependency: {
                stepId: 'B',
                choice: 'yes',
              },
              dependencyArray: [
                {
                  stepId: 'C',
                  choice: 'no',
                  type: 'delete',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: {
                stepId: 'D',
                type: 'check',
              },
            },
            C: {
              stepId: 'C',
              dependency: {
                stepId: 'A',
                type: 'delete',
              },
            },
          },
        },
        delete: {
          ids: ['A', 'B', 'D'],
          entities: {
            A: {
              stepId: 'A',
              dependency: {
                stepId: 'A',
              },
              dependencyArray: [
                {
                  stepId: 'A',
                  type: 'check',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: {
                stepId: 'D',
                type: 'check',
              },
            },
            D: {
              stepId: 'D',
              dependency: {
                stepId: 'A',
                type: 'delete',
              },
            },
          },
        },
      },
    };

    const expectedState = {
      dependencyChecks: {
        check: {
          ids: ['A', 'B', 'C'],
          entities: {
            A: {
              stepId: 'A',
              dependency: {
                stepId: 'B',
                choice: 'yes',
                type: 'check',
              },
              dependencyArray: [
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: {
                stepId: 'D',
                type: 'check',,
              },
              dependencyArray: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            C: {
              stepId: 'C',
              dependency: {
                stepId: 'A',
                type: 'delete',
              },
              dependencyArray: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
                {
                  stepId: 'A',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
          },
        },
        delete: {
          ids: ['A', 'B', 'D'],
          entities: {
            A: {
              stepId: 'A',
              dependency: {
                stepId: 'A',
                type: 'check',
              },
              dependencyArray: [
                {
                  stepId: 'A',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: {
                stepId: 'D',
                type: 'check',
              },
              dependencyArray: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            D: {
              stepId: 'D',
              dependency: {
                stepId: 'A',
                type: 'delete',
              },
              dependencyArray: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
                {
                  stepId: 'A',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
          },
        },
      },
    };

    const resultState = reducer(mockState, {
      type: 'dependencyCheck/resolveAllDependency',
      payload: ['check', 'delete'],
    });

    expect(resultState).toEqual(expectedState);
  });
});
