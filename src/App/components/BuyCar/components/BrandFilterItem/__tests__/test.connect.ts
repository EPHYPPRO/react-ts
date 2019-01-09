import { render } from './test.utils';
import fake from 'casual';
import { State } from 'src/store/models/State';
import { ListState } from 'src/store/models/ListState';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';
import {
  BrandFilterItem as BrandFilterItemMock,
  BrandFilterItemProps
} from '../view';

jest.mock('../view', () => {
  return { BrandFilterItem: jest.fn(() => null) };
});

/**
 * Instead of testing that, react-redux lib shoudl fix their typings
 * for connect HOC
 */
describe.skip('Connected BrandFilterItem', () => {
  it.skip('should receive state props properly from connect', async () => {
    const storeInitialState: State = {
      selectedBrandId: fake.integer(),
      brands: new ListState({
        error: true,
        isLoading: true,
        items: [new FakeSelectItem(), new FakeSelectItem()]
      })
    };

    render({}, { storeInitialState });

    const componentMock = (BrandFilterItemMock as unknown) as jest.Mock;

    const {
      selectedBrandId,
      error,
      isLoading,
      brands
    } = componentMock.mock.calls[0][0] as BrandFilterItemProps;

    let assertionObject: typeof storeInitialState = {};
    (function normalize() {
      assertionObject = {
        selectedBrandId,
        brands: new ListState({
          error,
          isLoading,
          items: brands
        })
      };
    })();

    expect(assertionObject).toEqual(storeInitialState);
  });

  it('should receive action creators props properly from connect', async () => {});
});
