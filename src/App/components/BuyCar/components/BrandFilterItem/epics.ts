import { switchMap, map, catchError, flatMap } from 'rxjs/operators';
import {
  errorBrands,
  receiveBrands,
  BrandsActionAsyncList,
  BrandSelectAction
} from './actions';
import { ofTypeNStatus } from 'src/store/models/action-types';
import { of } from 'rxjs';
import { SelectItem, emptySelectItemId } from 'src/App/components/common/SelectFilterItem';
import { Epic } from 'src/store/models/Epic';
import { ofType, combineEpics } from 'redux-observable';
import {
  receiveModels,
  requestModels,
  ModelsActionAsyncList,
  selectModel,
  ModelSelectAction
} from '../ModelFilterItem/actions';

const fetchBrandsEpic: Epic<BrandsActionAsyncList> = (
  action$,
  state$,
  { getJSON }
) =>
  action$.pipe(
    ofTypeNStatus<BrandsActionAsyncList>('FETCH_BRANDS', 'fetching'),
    switchMap(() =>
      getJSON<SelectItem[]>('http://localhost:2000/api/brands')
    ),
    map((brands) => receiveBrands(brands)),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);
      return of(errorBrands());
    })
  );

const selectBrandEpic: Epic<
  BrandSelectAction,
  ModelsActionAsyncList | ModelSelectAction
> = (action$) =>
  action$.pipe(
    ofType('SELECT_BRAND'),
    flatMap(({ id }) =>
      of(
        id === emptySelectItemId ? receiveModels([]) : requestModels(),
        selectModel(emptySelectItemId)
      )
    )
  );

export const BrandFilterItemEpic = combineEpics(
  fetchBrandsEpic,
  selectBrandEpic
);
