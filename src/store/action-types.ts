import { SelectItem } from 'src/App/components/common/SelectFilterItem';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

export type Action<T = {}> = {
  type: string;
} & T;

type Status = 'fetching' | 'received' | 'error';
export type ActionAsync<T = {}> = Action<T> & {
  status: Status;
};

export type ActionAsyncList<T = {}, I = SelectItem> = ActionAsync<
  T
> & {
  items?: I[];
};

/**
 * pipable rxjs operator for filtering actions of type ActionAsync
 * @param type
 * @param status
 */
export const ofTypeNStatus = (type: string, status: Status) =>
  pipe(
    filter(
      (action: ActionAsyncList) =>
        action.type === type && action.status === status
    )
  );
