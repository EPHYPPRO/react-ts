import { render, getOptions } from './test.utils';

describe('SearchButton', () => {
  it('should render properly', async () => {
    const { component } = render();

    expect(component).toMatchSnapshot();
  });

  it("should be disabled when at least one of ids doesn't picked", async () => {
    const { component, rerender } = render(
      {},
      getOptions(1, 1)
    );

    const searchButton = component.querySelector(
      'button'
    ) as HTMLButtonElement;

    expect(searchButton.disabled).toBeFalsy();

    const checkForDisabledState = (
      brandId: number,
      modelId: number
    ) => {
      rerender({}, getOptions(brandId, modelId));
      expect(searchButton.disabled).toBeTruthy();
    };

    checkForDisabledState(-1, 1);
    checkForDisabledState(1, -1);
    checkForDisabledState(-1, -1);
  });

  it('should call handler on button press', async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      {
        onClick
      },
      getOptions(1, 1)
    );

    const searchButton = getByText(/Search/i);
    searchButton.click();

    expect(onClick).toHaveBeenCalled();
  });
});
