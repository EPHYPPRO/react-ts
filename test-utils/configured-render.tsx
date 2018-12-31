import React, { Props } from 'react';
import { render, RenderOptions } from 'react-testing-library';
import {
  ContextsProvider,
  ContextsOptions
} from './contexts-provider';
import { getConfiguredStore } from 'src/store';

export type Options = RenderOptions & ContextsOptions;

export function getConfiguredRender<P>(ui: React.ReactElement<any>) {
  return (props?: P & Props<any>, options: Options = {}) => {
    const store = getConfiguredStore(options.storeInitialState);

    const utils = render(
      <ContextsProvider { ...options } store={ store }>
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
          store={ store }
        >
          { React.cloneElement(ui, props) }
        </ContextsProvider>
      );
    };

    return {
      ...utils,
      rerender,
      component: utils.container.firstChild as HTMLElement,
      getStoreState: store.getState
    };
  };
}
