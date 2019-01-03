import { ModelSelectAction, ModelsActionAsyncList } from './actions';
import { Reducer } from 'redux';
import { ListState } from 'src/store/models/ListState';

export const selectedModelId: Reducer<
  number,
  ModelSelectAction
> = (state = -1, action) => {
  return action.type === 'SELECT_MODEL' ? action.id : state;
};

export const models: Reducer<ListState, ModelsActionAsyncList> = (
  state = new ListState(),
  { type, status, items }
) => {
  if (type === 'FETCH_MODELS') {
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
