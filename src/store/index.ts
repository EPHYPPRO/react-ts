import { createStore, applyMiddleware, Store, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer } from './reducer';
import { epic } from './epic';
import { ajax } from 'rxjs/ajax';
import { State } from './state';
import { Action } from './action-types';

const epicMiddleware = createEpicMiddleware({
  dependencies: ajax.getJSON
});

export function configStore(): Store<State, Action> {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

  const initialState = {};

  const store = createStore<State, Action, any, any>(
    reducer,
    initialState,
    enhancer
  );

  epicMiddleware.run(epic);

  return store;
}
