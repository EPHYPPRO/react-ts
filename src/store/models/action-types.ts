import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SelectItem } from 'src/App/components/common/SelectFilterItem/models';

export type Action<T = string, PL = {}> = {
  type: T;
} & PL;

export type SelectAction<T = string, PL = {}> = Action<T, PL> & {
  id: number;
};

type Status = 'fetching' | 'received' | 'error';
export type ActionAsync<T = string, PL = {}> = Action<T, PL> & {
  status: Status;
};

export type ActionAsyncList<
  T = string,
  PL = {},
  I = SelectItem
> = ActionAsync<T, PL> & {
  items?: I[];
};

/**
 * pipable rxjs operator for filtering actions of type ActionAsync
 * @param type
 * @param status
 */
export function ofTypeNStatus<A extends ActionAsync>(
  type: A['type'],
  status: Status
) {
  return pipe(
    filter(
      (action: A) => action.type === type && action.status === status
    )
  );
}
