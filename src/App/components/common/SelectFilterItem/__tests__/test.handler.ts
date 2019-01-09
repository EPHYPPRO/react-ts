import { render } from './test.utils';
import { Select } from '@material-ui/core';
import { FakeSelectItem } from './FakeSelectItem';
import { SelectProps } from '@material-ui/core/Select';

jest.mock('@material-ui/core', () => ({
  Select: jest.fn(() => null),
  MenuItem: jest.fn(() => null),
  LinearProgress: jest.fn(() => null)
}));

describe('SelectFilterItem', () => {
  const SelectMock = Select as jest.Mock;

  const callOnChange = (id: number) => {
    const { onChange } = SelectMock.mock.calls[0][0] as SelectProps;

    onChange &&
      onChange(
        {
          target: {
            value: id.toString()
          }
        } as any,
        null
      );
  };

  it('should call handleChange callback and should not call it with the same choice', async () => {
    const item = new FakeSelectItem();
    const handleChange = jest.fn();

    render({
      handleChange,
      items: [item]
    });

    callOnChange(item.id);

    expect(handleChange).toHaveBeenCalledWith(item.id);
  });

  it('should not call handleChange callback if the same choice of item was selected', async () => {
    const item = new FakeSelectItem();
    const handleChange = jest.fn();

    render({
      handleChange,
      items: [item],
      id: item.id
    });

    callOnChange(item.id);

    expect(handleChange).not.toHaveBeenCalled();
  });
});
