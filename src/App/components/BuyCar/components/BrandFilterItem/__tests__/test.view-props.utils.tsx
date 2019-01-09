import * as React from 'react';
import { getConfiguredRender } from 'test-utils/configured-render';
import { BrandFilterItem, BrandFilterItemProps } from '../view';

export const render = getConfiguredRender<BrandFilterItemProps>(
  <BrandFilterItem />
);
