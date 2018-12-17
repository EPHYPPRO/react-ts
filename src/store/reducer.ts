import { combineReducers } from 'redux';
import { selectedBrandId, brands } from 'src/App/components/BuyCar/components/BrandFilterItem/reducers';
import { State } from './state';
import { selectedModelId, models } from 'src/App/components/BuyCar/components/ModelFilterItem/reducers';

export const reducer = combineReducers<State>({
  selectedBrandId,
  selectedModelId,
  brands,
  models
});
