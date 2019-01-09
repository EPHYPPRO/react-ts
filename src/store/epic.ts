import { combineEpics } from 'redux-observable';
import { BrandFilterItemEpic } from 'src/App/components/BuyCar/components/BrandFilterItem/epics';
import { fetchModelsEpic } from 'src/App/components/BuyCar/components/ModelFilterItem/epics';

export const epic = combineEpics(BrandFilterItemEpic, fetchModelsEpic);
