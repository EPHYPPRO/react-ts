import { SelectItem } from 'src/App/components/common/SelectFilterItem';

export class ListState<T = SelectItem> {
  items: T[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(...inits: Partial<ListState>[]) {
    Object.assign(this, ...inits);
  }
}
