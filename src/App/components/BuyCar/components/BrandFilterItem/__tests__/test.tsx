import { render } from './test.utils';
import {
  SelectFilterItem,
  SelectFilterItemProps
} from 'src/App/components/common/SelectFilterItem';
import * as actions from '../actions';
import fake from 'casual';

jest.mock('src/App/components/common/SelectFilterItem', () => ({
  SelectFilterItem: jest.fn(() => null)
}));

jest.mock('../actions', () => ({
  selectBrand: jest.fn(() => ({ type: '' })),
  requestBrands: jest.fn(() => ({ type: '' }))
}));

describe('BrandFilterItem', () => {
  const selectBrandMock = actions.selectBrand as jest.Mock;
  const SelectFilterItemMock = SelectFilterItem as jest.Mock;

  afterEach(() => {
    selectBrandMock.mockClear();
    SelectFilterItemMock.mockClear();
  });

  const callHandleChange = (id: number) => {
    const {
      handleChange
    }: SelectFilterItemProps = SelectFilterItemMock.mock.calls[0][0];
    handleChange && handleChange(id);
  };

  it(`should dispatch requestBrands action creator
      and populate brands state`, async () => {
    const requestBrandsMock = actions.requestBrands as jest.Mock;

    render();

    expect(requestBrandsMock).toHaveBeenCalled();
  });

  it('should dispatch selectBrand action creator on brand pick', async () => {
    const brandIdFake = fake.integer(1);

    render();

    callHandleChange(brandIdFake);

    expect(selectBrandMock).toHaveBeenCalledWith(brandIdFake);
  });
});
