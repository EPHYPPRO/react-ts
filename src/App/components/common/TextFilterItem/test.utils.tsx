import * as React from 'react';
import {
  TextFilterItem, TextFilterItemProps
} from '.';
import { getConfiguredRender } from 'test-utils/configured-render';

export const render = getConfiguredRender<TextFilterItemProps>(
  <TextFilterItem />
);
