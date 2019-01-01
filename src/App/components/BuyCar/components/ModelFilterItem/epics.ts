import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { FETCH_MODELS, errorModels, receiveModels } from './actions';
import { ofTypeNStatus } from 'src/store/action-types';
import { of } from 'rxjs';
import { State } from 'src/store/state';
import { ActionAsyncList } from 'src/App/components/common/SelectFilterItem/action-type';

export const fetchModelsEpic: Epic<ActionAsyncList, any, State> = (
  action$,
  state$,
  get: typeof ajax.getJSON
) =>
  action$.pipe(
    ofTypeNStatus<ActionAsyncList>(FETCH_MODELS, 'fetching'),
    switchMap(() =>
      get(
        `http://localhost:2000/api/models/${
          state$.value.selectedBrandId
        }`
      )
    ),
    map((models) => receiveModels(models)),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);
      return of(errorModels());
    })
  );
