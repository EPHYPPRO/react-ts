import fake from 'casual';
import { render } from './test.utils';
import { checkForLabelRender } from '../../FilterItem/test.utils';

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

  it('should render label', async () => {
    checkForLabelRender(render);
  });
});
