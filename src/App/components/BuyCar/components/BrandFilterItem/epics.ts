import { switchMap, map, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import {
  errorBrands,
  receiveBrands,
  BrandsActionAsyncList
} from './actions';
import { ofTypeNStatus } from 'src/store/models/action-types';
import { of } from 'rxjs';
import { Dependencies } from 'src/store/models/Dependencies';
import { State } from 'src/store/models/State';
import { SelectItem } from 'src/App/components/common/SelectFilterItem';

export const fetchBrandsEpic: Epic<
  BrandsActionAsyncList,
  BrandsActionAsyncList,
  State,
  Dependencies
> = (action$, state$, { getJSON }) =>
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
