import { SELECT_MODEL, FETCH_MODELS } from './actions';
import { Action, ActionAsyncList } from 'src/store/action-types';
import { Reducer } from 'redux';
import { ListState } from 'src/store/state';

export const selectedModelId: Reducer<
  number,
  Action<{ id: number }>
> = (state = -1, action) => {
  return action.type === SELECT_MODEL ? action.id : state;
};

export const models: Reducer<ListState, ActionAsyncList> = (
  state = new ListState(),
  { type, status, items }
) => {
  if (type === FETCH_MODELS) {
    switch (status) {
      case 'fetching':
        return new ListState(state, {
          isLoading: true,
          error: false
        });
      case 'received':
        return new ListState({
          isLoading: false,
          items,
          error: false
        });
      case 'error':
        return new ListState({
          isLoading: false,
          items: [],
          error: true
        });
    }
  }
  return state;
};
