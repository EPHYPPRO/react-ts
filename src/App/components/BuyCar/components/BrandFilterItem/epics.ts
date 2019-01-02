import { switchMap, map, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { FETCH_BRANDS, errorBrands, receiveBrands } from './actions';
import { ofTypeNStatus } from 'src/store/models/action-types';
import { of } from 'rxjs';
import { ActionAsyncList } from 'src/App/components/common/SelectFilterItem/action-type';
import { Dependencies } from 'src/store/models/Dependencies';
import { State } from 'src/store/models/state';
import { SelectItem } from 'src/App/components/common/SelectFilterItem';

export const fetchBrandsEpic: Epic<
  ActionAsyncList,
  ActionAsyncList,
  State,
  Dependencies
> = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofTypeNStatus<ActionAsyncList>(FETCH_BRANDS, 'fetching'),
    switchMap(() => getJSON<SelectItem[]>('http://localhost:2000/api/brands')),
    map((brands) => receiveBrands(brands)),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);
      return of(errorBrands());
    })
  );
