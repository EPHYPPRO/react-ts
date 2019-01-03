import { switchMap, map, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import {
  errorModels,
  receiveModels,
  ModelsActionAsyncList
} from './actions';
import { ofTypeNStatus } from 'src/store/models/action-types';
import { of } from 'rxjs';
import { State } from 'src/store/models/State';
import { SelectItem } from 'src/App/components/common/SelectFilterItem';
import { Dependencies } from 'src/store/models/Dependencies';

export const fetchModelsEpic: Epic<
  ModelsActionAsyncList,
  ModelsActionAsyncList,
  State,
  Dependencies
> = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofTypeNStatus<ModelsActionAsyncList>('FETCH_MODELS', 'fetching'),
    switchMap(() =>
      getJSON<SelectItem[]>(
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
