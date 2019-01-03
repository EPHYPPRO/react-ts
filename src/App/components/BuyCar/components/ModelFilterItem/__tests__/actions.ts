import {
  errorModels,
  receiveModels,
  requestModels,
  selectModel,
  ModelSelectAction,
  ModelsActionAsyncList
} from '../actions';
import fake from 'casual';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';

describe('action creators should return appropriate actions', () => {
  it('selectModel', async () => {
    const id = fake.integer();
    const expectedAction: ModelSelectAction = {
      type: 'SELECT_MODEL',
      id
    };

    expect(selectModel(id)).toEqual(expectedAction);
  });

  it('requestModels', async () => {
    const expectedAction: ModelsActionAsyncList = {
      type: 'FETCH_MODELS',
      status: 'fetching'
    };

    expect(requestModels()).toEqual(expectedAction);
  });

  it('receiveModels', async () => {
    const items = [new FakeSelectItem(), new FakeSelectItem()];
    const expectedAction: ModelsActionAsyncList = {
      type: 'FETCH_MODELS',
      status: 'received',
      items
    };

    expect(receiveModels(items)).toEqual(expectedAction);
  });

  it('errorModels', async () => {
    const expectedAction: ModelsActionAsyncList = {
      type: 'FETCH_MODELS',
      status: 'error'
    };

    expect(errorModels()).toEqual(expectedAction);
  });
});
