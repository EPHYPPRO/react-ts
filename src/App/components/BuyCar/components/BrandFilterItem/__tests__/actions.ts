import {
  errorBrands,
  receiveBrands,
  requestBrands,
  selectBrand,
  BrandSelectAction,
  BrandsActionAsyncList
} from '../actions';
import fake from 'casual';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';

describe('action creators should return appropriate actions', () => {
  it('selectBrand', async () => {
    const id = fake.integer();
    const expectedAction: BrandSelectAction = {
      type: 'SELECT_BRAND',
      id
    };

    expect(selectBrand(id)).toEqual(expectedAction);
  });

  it('requestBrands', async () => {
    const expectedAction: BrandsActionAsyncList = {
      type: 'FETCH_BRANDS',
      status: 'fetching'
    };

    expect(requestBrands()).toEqual(expectedAction);
  });

  it('receiveBrands', async () => {
    const items = [new FakeSelectItem(), new FakeSelectItem()];
    const expectedAction: BrandsActionAsyncList = {
      type: 'FETCH_BRANDS',
      status: 'received',
      items
    };

    expect(receiveBrands(items)).toEqual(expectedAction);
  });

  it('errorBrands', async () => {
    const expectedAction: BrandsActionAsyncList = {
      type: 'FETCH_BRANDS',
      status: 'error'
    };

    expect(errorBrands()).toEqual(expectedAction);
  });
});
