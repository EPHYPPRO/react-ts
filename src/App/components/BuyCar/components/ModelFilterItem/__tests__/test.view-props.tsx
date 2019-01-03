import { render } from './test.view-props.utils';
import fake from 'casual';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';
import { ModelFilterItemProps } from '../view';
import {
  SelectFilterItem as SelectFilterItemMock,
  SelectFilterItemProps
} from 'src/App/components/common/SelectFilterItem';

jest.mock('src/App/components/common/SelectFilterItem', () => {
  return { SelectFilterItem: jest.fn(() => null) };
});

describe('ModelFilterItem', () => {
  const componentMock = SelectFilterItemMock as jest.Mock;

  beforeEach(() => {
    componentMock.mockClear();
  });

  it('should pass its props properly to SelectFilterItem', async () => {
    const inputProps: Partial<ModelFilterItemProps> = {
      selectedModelId: fake.integer(),
      models: [new FakeSelectItem(), new FakeSelectItem()],
      isLoading: true,
      error: true
    };

    render({
      ...inputProps,
      selectedBrandId: -1
    });

    const {
      id: selectedModelId,
      items: models,
      error,
      isLoading
    }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    let assertionObject: typeof inputProps = {};
    (function normalize() {
      assertionObject = {
        selectedModelId,
        models,
        error,
        isLoading
      };
    })();

    expect(assertionObject).toEqual(inputProps);
  });

  it('should render label text properly', async () => {
    render();

    const { label }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    expect(label).toMatch(/Model:/i);
  });

  it('should offer to pick a brand first if no brand selected', async () => {
    render({
      selectedBrandId: -1
    });

    const { defaultItemValue }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    expect(defaultItemValue).toMatch(/Select a brand first/i);
  });

  it('should offer to pick a model if brand is selected but model is not', async () => {
    render({
      selectedBrandId: fake.integer(0),
      selectedModelId: -1
    });

    const {
      defaultItemValue
    }: SelectFilterItemProps = componentMock.mock.calls[0][0];

    expect(defaultItemValue).toMatch(/Select a Model/i);
  });

});
