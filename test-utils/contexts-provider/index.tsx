import React, { FC } from 'react';
import { ReduxProvider } from './redux-provider';
import { State } from 'src/store/state';

export interface ContextsOptions {
  storeInitialState?: State;
}

export const ContextsProvider: FC<ContextsOptions> = ({
  children,
  storeInitialState = {}
}) => (
  <ReduxProvider initialState={ storeInitialState }>
    { children }
  </ReduxProvider>
);
