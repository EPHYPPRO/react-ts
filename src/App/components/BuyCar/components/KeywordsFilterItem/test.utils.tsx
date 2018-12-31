import * as React from 'react';
import { getConfiguredRender } from 'test-utils/configured-render';
import KeywordsFilterItem, { KeywordsFilterItemProps } from '.';

export const render = getConfiguredRender<KeywordsFilterItemProps>(
  <KeywordsFilterItem />
);
