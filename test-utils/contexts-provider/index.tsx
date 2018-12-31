import React, { FC } from 'react';
import { ReduxProvider } from './redux-provider';
import { State } from 'src/store/state';
import { Store } from 'redux';

export interface ContextsProps {
  store: Store<State>;
}

export interface ContextsOptions {
  storeInitialState?: State;
}

export const ContextsProvider: FC<ContextsProps> = ({
  children,
  store
}) => <ReduxProvider store={ store }>{ children }</ReduxProvider>;
