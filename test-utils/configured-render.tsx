import React, { Props } from 'react';
import { render, RenderOptions } from 'react-testing-library';
import {
  ContextsProvider,
  ContextsOptions
} from './contexts-provider';

export type Options = RenderOptions & ContextsOptions;

export function getConfiguredRender<P>(
  ui: React.ReactElement<any>,
  options?: Options
) {
  return (props?: P & Props<any>) => {
    const utils = render(
      <ContextsProvider { ...options }>
        { React.cloneElement(ui, props) }
      </ContextsProvider>,
      options
    );

    const rerender = (
      props?: P & Props<any>,
      contextsOptions?: ContextsOptions
    ) => {
      utils.rerender(
        <ContextsProvider
          { ...(contextsOptions ? contextsOptions : options) }
        >
          { React.cloneElement(ui, props) }
        </ContextsProvider>
      );
    };

    return {
      ...utils,
      rerender,
      component: utils.container.firstChild as HTMLElement
    };
  };
}
