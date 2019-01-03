import { render } from './test.utils';

describe('ModelFilterItem', () => {
  it('should render properly', async () => {
    const { component } = render();

    expect(component).toMatchSnapshot();
  });
});
