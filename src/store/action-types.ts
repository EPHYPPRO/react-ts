import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

export type Action<T = {}> = {
  type: string;
} & T;

type Status = 'fetching' | 'received' | 'error';
export type ActionAsync<T = {}> = Action<T> & {
  status: Status;
};

/**
 * pipable rxjs operator for filtering actions of type ActionAsync
 * @param type
 * @param status
 */
export function ofTypeNStatus<T extends ActionAsync>(
  type: string,
  status: Status
) {
  return pipe(
    filter(
      (action: T) => action.type === type && action.status === status
    )
  );
}
