import React, { Props } from 'react';
import { render } from 'react-testing-library';

export function getConfiguredRender<P>(
  ui: React.ReactElement<any>,
  { ...options } = {}
) {
  return (props?: P & Props<any>) => {
    const utils = render(React.cloneElement(ui, props), options);
    return { ...utils, component: utils.container.firstChild };
  };
}
