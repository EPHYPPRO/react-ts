import { Reducer } from 'redux';
import { ListState } from 'src/store/models/ListState';
import { BrandSelectAction, BrandsActionAsyncList } from './actions';

export const selectedBrandId: Reducer<
  number,
  BrandSelectAction
> = (state = -1, action) => {
  return action.type === 'SELECT_BRAND' ? action.id : state;
};

export const brands: Reducer<ListState, BrandsActionAsyncList> = (
  state = new ListState(),
  { type, status, items }
) => {
  if (type === 'FETCH_BRANDS') {
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
