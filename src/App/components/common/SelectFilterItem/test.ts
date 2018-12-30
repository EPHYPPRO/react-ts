import fake from 'casual';
import { buildItem, render } from './test.utils';
import { fireEvent } from 'react-testing-library';
import { checkForLabelRender } from '../FilterItem/test.utils';

describe('SelectFilterItem', () => {
  it('should render properly', async () => {
    const { component } = render({
      id: 1,
      items: [{ id: 1, text: 'item 1' }, { id: 2, text: 'item 2' }],
      handleChange: jest.fn(),
      defaultItemValue: 'item default',
      label: 'label text'
    });

    expect(component).toMatchSnapshot();
  });

  it('should pick default item', async () => {
    const defaultItemText = fake.title;
    const { queryByText } = render({
      defaultItemValue: defaultItemText
    });

    expect(queryByText(defaultItemText)).toBeTruthy();
  });

  it('should show linear loader when isLoading', async () => {
    const { rerender, queryByTestId } = render({
      isLoading: true
    });

    expect(queryByTestId('loader')).toBeTruthy();

    rerender({
      isLoading: false
    });

    expect(queryByTestId('loader')).toBeFalsy();
  });

  it('should show error when error occured', async () => {
    const { rerender, queryByTestId } = render({
      error: true
    });

    expect(queryByTestId('error-message')).toBeTruthy();

    rerender({
      error: false
    });

    expect(queryByTestId('error-message')).toBeFalsy();
  });

  it('should call handleChange callback', async () => {
    const item1 = buildItem();
    const item2 = buildItem();
    const handleChange = jest.fn();
    render({
      handleChange,
      items: [item1, item2],
    });

    // items block rendered in the end of the body
    const element1 = document.body.querySelector<HTMLElement>(
      'div.mui-fixed ul > li:nth-child(1)'
    );
    element1 && fireEvent.click(element1);

    expect(handleChange).toHaveBeenCalledWith(item1.id);
  });

  it('should render label', async () => {
    checkForLabelRender(render);
  });
});
