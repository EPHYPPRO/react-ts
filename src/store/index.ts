import { createStore, applyMiddleware, Store, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer } from './reducer';
import { epic } from './epic';
import { State } from './models/State';
import { Action } from './models/action-types';
import { dependencies } from './models/Dependencies';

export function getConfiguredStore(
  initialState: State = {}
): Store<State, Action> {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const epicMiddleware = createEpicMiddleware({
    dependencies
  });

  const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

  const store = createStore<State, Action, any, any>(
    reducer,
    initialState,
    enhancer
  );

  epicMiddleware.run(epic);

  return store;
}
