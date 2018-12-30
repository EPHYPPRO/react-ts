import React, { Props } from 'react';
import { render } from 'react-testing-library';

export function getConfiguredRender<P>(
  ui: React.ReactElement<any>,
  { ...options } = {}
) {
  return (props?: P & Props<any>) => {
    const utils = render(React.cloneElement(ui, props), options);

    const rerender = (props?: P & Props<any>) => {
      utils.rerender(React.cloneElement(ui, props));
    };

    return { ...utils, rerender, component: utils.container.firstChild };
  };
}
