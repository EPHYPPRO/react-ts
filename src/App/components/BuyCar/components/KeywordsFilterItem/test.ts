import { render } from './test.utils';
import fake from 'casual';
import { fireEvent } from 'react-testing-library';

describe('KeywordsFilterItem', () => {
  it('should render properly', async () => {
    const { component } = render();

    expect(component).toMatchSnapshot();
  });

  it('should change store state', async () => {
    const fakeText = fake.title;
    const { component, getStoreState } = render();
    const input = component.querySelector('input');

    input && fireEvent.change(input, { target: { value: fakeText } });

    const state = getStoreState();

    expect(state.keywords).toBe(fakeText);
  });

});
