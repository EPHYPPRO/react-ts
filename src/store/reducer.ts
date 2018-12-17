import { combineReducers } from 'redux';
import { selectedBrandId, brands } from 'src/App/components/BuyCar/components/BrandFilterItem/reducers';
import { State } from './state';
import { selectedModelId, models } from 'src/App/components/BuyCar/components/ModelFilterItem/reducers';
import { keywords } from 'src/App/components/BuyCar/components/KeywordsFilterItem/reducers';

export const reducer = combineReducers<State>({
  selectedBrandId,
  selectedModelId,
  brands,
  models,
  keywords
});
