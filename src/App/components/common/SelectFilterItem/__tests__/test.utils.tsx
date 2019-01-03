import * as React from 'react';
import {
  SelectFilterItem,
  SelectFilterItemProps,
  SelectItem
} from '..';
import { getConfiguredRender } from 'test-utils/configured-render';
import fake from 'casual';

export const render = getConfiguredRender<SelectFilterItemProps>(
  <SelectFilterItem />
);

export const buildItem = (function getItemBuilder() {
  const idsSet = new Set();

  return function buildItem(): SelectItem {
    const id = fake.integer();

    if (idsSet.has(id)) {
      return buildItem();
    }

    const item = {
      id,
      text: fake.title
    };

    idsSet.add(item);

    return item;
  };
})();
