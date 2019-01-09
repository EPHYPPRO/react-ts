import {
  SelectAction,
  ActionAsyncList
} from 'src/store/models/action-types';
import { SelectItem } from 'src/App/components/common/SelectFilterItem/models';

export type ModelSelectAction = SelectAction<
  'SELECT_MODEL',
  { id: number }
>;

export const selectModel = (id: number): ModelSelectAction => {
  return {
    type: 'SELECT_MODEL',
    id
  };
};

export type ModelsActionAsyncList = ActionAsyncList<'FETCH_MODELS'>;

export const requestModels = (): ModelsActionAsyncList => ({
  type: 'FETCH_MODELS',
  status: 'fetching'
});

export const receiveModels = (
  items: SelectItem[]
): ModelsActionAsyncList => ({
  type: 'FETCH_MODELS',
  status: 'received',
  items
});

export const errorModels = (): ModelsActionAsyncList => ({
  type: 'FETCH_MODELS',
  status: 'error'
});
