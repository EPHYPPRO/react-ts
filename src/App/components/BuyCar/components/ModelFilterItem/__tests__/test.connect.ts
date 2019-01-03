import { render } from './test.utils';
import fake from 'casual';
import { State } from 'src/store/models/State';
import { ListState } from 'src/store/models/ListState';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';
import {
  ModelFilterItem as ModelFilterItemMock,
  ModelFilterItemProps
} from '../view';

jest.mock('../view', () => {
  return { ModelFilterItem: jest.fn(() => null) };
});

describe('Connected ModelFilterItem', () => {
  it('should receive props properly from connect', async () => {
    const storeInitialState: State = {
      selectedModelId: fake.integer(),
      selectedBrandId: fake.integer(),
      models: new ListState({
        error: true,
        isLoading: true,
        items: [new FakeSelectItem(), new FakeSelectItem()]
      })
    };

    render({}, { storeInitialState });

    const componentMock = (ModelFilterItemMock as unknown) as jest.Mock;

    const {
      selectedModelId,
      selectedBrandId,
      error,
      isLoading,
      models
    }: ModelFilterItemProps = componentMock.mock.calls[0][0];

    let assertionObject: typeof storeInitialState = {};
    (function normalize() {
      assertionObject = {
        selectedModelId,
        selectedBrandId,
        models: new ListState({
          error,
          isLoading,
          items: models
        })
      };
    })();

    expect(assertionObject).toEqual(storeInitialState);
  });
});
