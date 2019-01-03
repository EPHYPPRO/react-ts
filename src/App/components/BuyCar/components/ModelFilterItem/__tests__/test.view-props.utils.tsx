import * as React from 'react';
import { getConfiguredRender } from 'test-utils/configured-render';
import { ModelFilterItem, ModelFilterItemProps } from '../view';

export const render = getConfiguredRender<ModelFilterItemProps>(
  <ModelFilterItem />
);
