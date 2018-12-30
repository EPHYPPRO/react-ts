import fake from 'casual';
import { render } from './test.utils';
import { fireEvent } from 'react-testing-library';
import { checkForLabelRender } from '../FilterItem/test.utils';

describe('TextFilterItem', () => {
  it('should render properly', async () => {
    const { component } = render({
      handleChange: jest.fn(),
      label: 'label text',
      text: fake.title
    });

    expect(component).toMatchSnapshot();
  });

  it('should call handleChange callback', async () => {
    const fakeText = fake.title;
    const handleChange = jest.fn();

    const { component } = render({
      handleChange
    });

    const input = component.querySelector('input');

    input && fireEvent.change(input, { target: { value: fakeText } });

    expect(handleChange).toHaveBeenCalledWith(fakeText);
  });

  it('should render label', async () => {
    checkForLabelRender(render);
  });

});
