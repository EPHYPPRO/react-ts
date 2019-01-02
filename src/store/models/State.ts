import { ListState } from './ListState';

export interface State {
  selectedBrandId?: number;
  selectedModelId?: number;
  keywords?: string;
  brands?: ListState;
  models?: ListState;
}
