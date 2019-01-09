import * as React from 'react';
import { SelectFilterItem } from '..';
import { getConfiguredRender } from 'test-utils/configured-render';
import { SelectFilterItemProps } from '../models';

export const render = getConfiguredRender<SelectFilterItemProps>(
  <SelectFilterItem />
);
