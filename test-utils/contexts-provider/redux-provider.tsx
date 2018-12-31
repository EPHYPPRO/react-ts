import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { State } from 'src/store/state';
import { Store } from 'redux';

export const ReduxProvider: FC<{ store: Store<State> }> = ({
  children,
  store
}) => <Provider store={ store }>{ children }</Provider>;
