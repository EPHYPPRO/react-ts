import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer } from './reducer';
import { epic } from './epic';
import { ajax } from 'rxjs/ajax';

const epicMiddleware = createEpicMiddleware({
  dependencies: { getJson: ajax.getJSON }
});

export function configStore() {
  const store = createStore(reducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(epic);

  return store;
}
