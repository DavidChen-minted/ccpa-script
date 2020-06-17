import reducer, {
  DependencyCheckState,
} from 'features/dependency/dependencyCheckSlice';

describe('dependencyCheckReducer', () => {
  const action = {
    type: 'dependencyCheck/resolveAllDependency',
    payload: ['check', 'delete'],
  };
  const mockState1: DependencyCheckState = {
    dependencyChecks: {
      check: {
        ids: ['A', 'B', 'C'],
        entities: {
          A: {
            stepId: 'A',
            dependency: [
              {
                stepId: 'B',
                choice: 'yes',
              },
            ],
            dependencyCheckList: [
              {
                stepId: 'C',
                choice: 'no',
                type: 'delete',
              },
            ],
          },
          B: {
            stepId: 'B',
            dependency: [
              {
                stepId: 'D',
                type: 'check',
              },
            ],
          },
          C: {
            stepId: 'C',
            dependency: [
              {
                stepId: 'A',
                type: 'delete',
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
            dependency: [
              {
                stepId: 'A',
              },
            ],
            dependencyCheckList: [
              {
                stepId: 'A',
                type: 'check',
              },
            ],
          },
          B: {
            stepId: 'B',
            dependency: [
              {
                stepId: 'D',
                type: 'check',
              },
            ],
          },
          D: {
            stepId: 'D',
            dependency: [
              {
                stepId: 'A',
                type: 'delete',
              },
            ],
          },
        },
      },
    },
  };

  const mockState2: DependencyCheckState = {
    ...mockState1,
    dependencyChecks: {
      ...mockState1.dependencyChecks,
      check: {
        ...mockState1.dependencyChecks.check,
        entities: {
          ...mockState1.dependencyChecks.check.entities,
          A: {
            ...mockState1.dependencyChecks.check.entities.A!,
            dependency: [
              {
                stepId: 'C',
              },
            ],
          },
        },
      },
    },
  };

  const mockState3: DependencyCheckState = {
    dependencyChecks: {
      check: {
        ids: ['A', 'B', 'C'],
        entities: {
          A: {
            stepId: 'A',
            dependency: [
              {
                stepId: 'B',
                choice: 'yes',
              },
              {
                stepId: 'B',
                type: 'delete',
              },
            ],
            dependencyCheckList: [
              {
                stepId: 'C',
                choice: 'no',
                type: 'delete',
              },
            ],
          },
          B: {
            stepId: 'B',
            dependency: [
              {
                stepId: 'D',
                type: 'check',
              },
            ],
          },
          C: {
            stepId: 'C',
            dependency: [
              {
                stepId: 'A',
                type: 'delete',
              },
              {
                stepId: 'B',
                type: 'delete',
              },
              {
                stepId: 'C',
                type: 'delete',
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
            dependency: [
              {
                stepId: 'A',
              },
            ],
            dependencyCheckList: [
              {
                stepId: 'A',
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
            dependency: [
              {
                stepId: 'D',
                type: 'check',
              },
            ],
          },
          D: {
            stepId: 'D',
            dependency: [
              {
                stepId: 'A',
                type: 'delete',
              },
            ],
          },
        },
      },
    },
  };

  it('should correctly resolve all dependency', () => {
    const expectedState = {
      dependencyChecks: {
        check: {
          ids: ['A', 'B', 'C'],
          entities: {
            A: {
              stepId: 'A',
              dependency: [
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
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
              dependency: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            C: {
              stepId: 'C',
              dependency: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'A',
                  type: 'delete',
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
                {
                  stepId: 'A',
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
              dependency: [
                {
                  stepId: 'A',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'A',
                  type: 'check',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            D: {
              stepId: 'D',
              dependency: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'A',
                  type: 'delete',
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
                {
                  stepId: 'A',
                  type: 'check',
                },
              ],
            },
          },
        },
      },
    };

    const resultState = reducer(mockState1, action);

    expect(resultState).toEqual(expectedState);
  });

  it('should throw error with circular dependency', () => {
    expect(reducer.bind(null, mockState2, action)).toThrow(
      /circular dependency/
    );
  });

  it('should correctly resolve and dedupe all dependency', () => {
    const resultState = reducer(mockState3, action);

    const expectedState = {
      dependencyChecks: {
        check: {
          ids: ['A', 'B', 'C'],
          entities: {
            A: {
              stepId: 'A',
              dependency: [
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  type: 'delete',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  type: 'delete',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            C: {
              stepId: 'C',
              dependency: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
                {
                  stepId: 'B',
                  type: 'delete',
                },
                {
                  stepId: 'C',
                  type: 'delete',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'A',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  type: 'delete',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
                {
                  stepId: 'C',
                  type: 'delete',
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
              dependency: [
                {
                  stepId: 'A',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'A',
                  type: 'check',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  type: 'delete',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
              ],
            },
            B: {
              stepId: 'B',
              dependency: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'D',
                  type: 'check',
                },
              ],
            },
            D: {
              stepId: 'D',
              dependency: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
              ],
              dependencyCheckList: [
                {
                  stepId: 'A',
                  type: 'delete',
                },
                {
                  stepId: 'B',
                  choice: 'yes',
                  type: 'check',
                },
                {
                  stepId: 'B',
                  type: 'delete',
                },
                {
                  stepId: 'D',
                  type: 'check',
                },
                {
                  stepId: 'A',
                  type: 'check',
                },
              ],
            },
          },
        },
      },
    };

    expect(resultState).toEqual(expectedState);
  });
});
