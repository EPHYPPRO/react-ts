import { SELECT_BRAND, FETCH_BRANDS } from './actions';
import { Action } from 'src/store/models/action-types';
import { Reducer } from 'redux';
import { ListState } from 'src/store/models/ListState';
import { ActionAsyncList } from 'src/App/components/common/SelectFilterItem/action-type';

export const selectedBrandId: Reducer<
  number,
  Action<{ id: number }>
> = (state = -1, action) => {
  return action.type === SELECT_BRAND ? action.id : state; // TODO: make action.type === SELECT_BRAND as function
};

export const brands: Reducer<ListState, ActionAsyncList> = (
  state = new ListState(),
  { type, status, items }
) => {
  if (type === FETCH_BRANDS) {
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
