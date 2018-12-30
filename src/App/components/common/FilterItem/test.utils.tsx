import * as React from 'react';
import { FilterItem, FilterItemProps } from '.';
import { getConfiguredRender } from 'test-utils/configured-render';
import fake from 'casual';

export const render = getConfiguredRender<FilterItemProps>(<FilterItem />);

export const checkForLabelRender = (renderer = render) => {
  const label = fake.title;
  const { getByTestId } = renderer({ label });

  expect(getByTestId('label')).toHaveTextContent(
    new RegExp(label)
  );
};
