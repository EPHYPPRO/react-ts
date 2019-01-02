import { SelectItem } from '.';
import { ActionAsync } from 'src/store/models/action-types';

export type ActionAsyncList<T = {}, I = SelectItem> = ActionAsync<
  T
> & {
  items?: I[];
};
