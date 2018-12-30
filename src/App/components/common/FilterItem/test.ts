import fake from 'casual';
import { render, checkForLabelRender } from './test.utils';

describe('FilterItem', () => {
  it('should render properly', async () => {
    const { component } = render({
      label: 'label text',
      children: 'content'
    });

    expect(component).toMatchSnapshot();
  });

  it('should render children and do not render label element', async () => {
    const children = fake.text;
    const { container, queryByTestId } = render({ children });

    expect(container).toHaveTextContent(new RegExp(`${children}`));
    expect(queryByTestId('label')).toBeFalsy();
  });

  it('should render label', async () => {
    checkForLabelRender(render);
  });
});
