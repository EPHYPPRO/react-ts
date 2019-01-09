import { render } from './test.view-props.utils';
import fake from 'casual';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';
import {
  SelectFilterItem as SelectFilterItemMock,
  SelectFilterItemProps
} from 'src/App/components/common/SelectFilterItem';
import { BrandFilterItemProps } from '../view';

jest.mock('src/App/components/common/SelectFilterItem', () => {
  return { SelectFilterItem: jest.fn(() => null) };
});

describe('BrandFilterItem', () => {
  const componentMock = SelectFilterItemMock as jest.Mock;

  afterEach(() => {
    componentMock.mockClear();
  });

  it('should pass its props properly to SelectFilterItem', async () => {
    const inputProps: Partial<BrandFilterItemProps> = {
      selectedBrandId: fake.integer(),
      brands: [new FakeSelectItem(), new FakeSelectItem()],
      isLoading: true,
      error: true
    };

    render({
      ...inputProps
    });

    const {
      id: selectedBrandId,
      items: brands,
      error,
      isLoading
    }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    let assertionObject: typeof inputProps = {};
    (function normalize() {
      assertionObject = {
        selectedBrandId,
        brands,
        error,
        isLoading
      };
    })();

    expect(assertionObject).toEqual(inputProps);
  });

  it('should render label text properly', async () => {
    render();

    const {
      label
    }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    expect(label).toMatch(/Brand:/i);
  });

  it('should offer to pick a brand if brand is not picked', async () => {
    render();

    const {
      defaultItemValue
    }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    expect(defaultItemValue).toMatch(/Select a Brand/i);
  });
});
