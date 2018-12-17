import {
  Action,
  ActionAsyncList
} from 'src/store/action-types';
import { SelectItem } from 'src/App/components/common/SelectFilterItem';

export const SELECT_BRAND = 'SELECT_BRAND';

export const selectBrand = (id: number): Action<{ id: number }> => {
  return {
    type: SELECT_BRAND,
    id
  };
};

export const FETCH_BRANDS = 'FETCH_BRANDS';

export const requestBrands = (): ActionAsyncList => ({
  type: FETCH_BRANDS,
  status: 'fetching'
});

export const receiveBrands = (
  items: SelectItem[]
): ActionAsyncList => ({
  type: FETCH_BRANDS,
  status: 'received',
  items
});

export const errorBrands = (): ActionAsyncList => ({
  type: FETCH_BRANDS,
  status: 'error'
});
