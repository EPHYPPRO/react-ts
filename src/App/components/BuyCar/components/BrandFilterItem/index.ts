import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { BrandFilterItem as View } from './view';
import { selectBrand, requestBrands } from './actions';
import {
  requestModels,
  selectModel,
  receiveModels
} from '../ModelFilterItem/actions';
import { SelectItem } from 'src/App/components/common/SelectFilterItem/models';

export interface BrandFilterItemStateProps {
  selectedBrandId: number;
  brands: SelectItem[];
  isLoading: boolean;
  error: boolean;
}

export interface BrandFilterItemDispatchProps {
  selectBrand: typeof selectBrand;
  requestBrands: typeof requestBrands;
  selectModel: typeof selectModel;
  requestModels: typeof requestModels;
  receiveModels: typeof receiveModels;
}

export const BrandFilterItem = connect(
  ({ selectedBrandId, brands }: State) => ({
    selectedBrandId,
    brands: brands && brands.items,
    isLoading: brands && brands.isLoading,
    error: brands && brands.error
  }),
  {
    selectBrand,
    requestBrands,
    selectModel,
    requestModels,
    receiveModels
  }
)(View);
