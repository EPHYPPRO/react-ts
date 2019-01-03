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
  selectModel: jest.fn(() => ({ type: '' })),
  requestModels: jest.fn(() => ({ type: '' }))
}));

describe('ModelFilterItem', () => {
  it(`should dispatch requestModels action creator
      and populate models state`, async () => {
    const requestModelsMock = actions.requestModels as jest.Mock;

    render();

    expect(requestModelsMock).toHaveBeenCalled();
  });

  it(`should dispatch selectModel action creator on model pick
      and change selectedModelId state`, async () => {
    const modelIdFake = fake.integer(1);
    const selectModelMock = actions.selectModel as jest.Mock;
    const SelectFilterItemMock = SelectFilterItem as jest.Mock;
    SelectFilterItemMock.mockClear();

    render();

    const {
      handleChange
    }: SelectFilterItemProps = SelectFilterItemMock.mock.calls[0][0];
    handleChange && handleChange(modelIdFake);

    expect(selectModelMock).toHaveBeenCalledWith(modelIdFake);
  });
});
