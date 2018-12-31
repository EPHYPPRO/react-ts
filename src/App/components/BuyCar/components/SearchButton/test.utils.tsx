import * as React from 'react';
import {
  getConfiguredRender,
  Options
} from 'test-utils/configured-render';
import SearchButton, { SearchButtonProps } from '.';

export const render = getConfiguredRender<SearchButtonProps>(
  <SearchButton />
);

export const getOptions = (
  selectedBrandId: number = -1,
  selectedModelId: number = -1
): Options => {
  return {
    storeInitialState: {
      selectedBrandId,
      selectedModelId
    }
  };
};
