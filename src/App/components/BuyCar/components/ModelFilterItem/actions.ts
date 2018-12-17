import { Action, ActionAsyncList } from 'src/store/action-types';
import { SelectItem } from 'src/App/components/common/SelectFilterItem';

export const SELECT_MODEL = 'SELECT_MODEL';

export const selectModel = (id: number): Action<{ id: number }> => {
  return {
    type: SELECT_MODEL,
    id
  };
};

export const FETCH_MODELS = 'FETCH_MODELS';

export const requestModels = (): ActionAsyncList => ({
  type: FETCH_MODELS,
  status: 'fetching'
});

export const receiveModels = (
  items: SelectItem[]
): ActionAsyncList => ({
  type: FETCH_MODELS,
  status: 'received',
  items
});

export const errorModels = (): ActionAsyncList => ({
  type: FETCH_MODELS,
  status: 'error'
});