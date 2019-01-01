import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { FETCH_BRANDS, errorBrands, receiveBrands } from './actions';
import { ofTypeNStatus } from 'src/store/action-types';
import { of } from 'rxjs';
import { ActionAsyncList } from 'src/App/components/common/SelectFilterItem/action-type';

export const fetchBrandsEpic: Epic<ActionAsyncList> = (
  action$,
  state$,
  get: typeof ajax.getJSON
) =>
  action$.pipe(
    ofTypeNStatus<ActionAsyncList>(FETCH_BRANDS, 'fetching'),
    switchMap(() => get('http://localhost:2000/api/brands')),
    map((brands) => receiveBrands(brands)),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);
      return of(errorBrands());
    })
  );
