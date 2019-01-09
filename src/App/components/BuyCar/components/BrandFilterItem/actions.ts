import {
  ActionAsyncList,
  SelectAction
} from 'src/store/models/action-types';
import { SelectItem } from 'src/App/components/common/SelectFilterItem';

export type BrandSelectAction = SelectAction<'SELECT_BRAND'>;

export const selectBrand = (id: number): BrandSelectAction => ({
  type: 'SELECT_BRAND',
  id
});

export type BrandsActionAsyncList = ActionAsyncList<'FETCH_BRANDS'>;

export const requestBrands = (): BrandsActionAsyncList => ({
  type: 'FETCH_BRANDS',
  status: 'fetching'
});

export const receiveBrands = (
  items: SelectItem[]
): BrandsActionAsyncList => ({
  type: 'FETCH_BRANDS',
  status: 'received',
  items
});

export const errorBrands = (): BrandsActionAsyncList => ({
  type: 'FETCH_BRANDS',
  status: 'error'
});
