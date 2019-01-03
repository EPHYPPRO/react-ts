import { Action } from 'src/store/models/action-types';
import { Reducer } from 'redux';

const unknownAction: Action = { type: 'UNKNOWN_ACTION' };

export function testForInitialAndCurrentState<S>(
  reducer: Reducer<S, Action>,
  initialState: S,
  currentState: S
) {
  it('check for initial state', async () => {
    expect(reducer(initialState, unknownAction)).toEqual(
      initialState
    );
  });

  it('check for current state', async () => {
    expect(reducer(currentState, unknownAction)).toEqual(
      currentState
    );
  });
}
