import { render } from './test.utils';

describe('BrandFilterItem', () => {
  it('should render properly', async () => {
    const { component } = render();

    expect(component).toMatchSnapshot();
  });
});
