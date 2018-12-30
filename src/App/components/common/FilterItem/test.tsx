import * as React from 'react';
import { FilterItem, FilterItemProps } from '.';
import { getConfiguredRender } from 'test-utils/configured-render';
import fake from 'casual';

const render = getConfiguredRender<FilterItemProps>(<FilterItem />);

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
    const label = fake.title;
    const { getByTestId } = render({ label });

    expect(getByTestId('label')).toHaveTextContent(
      new RegExp(label)
    );
  });
});
