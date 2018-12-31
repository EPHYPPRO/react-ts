import React from 'react';
import { BuyCar } from '.';
import { getConfiguredRender } from 'test-utils/configured-render';

const render = getConfiguredRender(<BuyCar />);

describe('BuyCar', () => {
  it('should render properly', async () => {
    const { container } = render();

    expect(container.firstChild).toMatchSnapshot();
  });
});
