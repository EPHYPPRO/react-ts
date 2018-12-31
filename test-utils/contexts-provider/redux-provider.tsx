import React, { FC } from 'react';
import { getConfiguredStore } from 'src/store';
import { Provider } from 'react-redux';
import { State } from 'src/store/state';

export const ReduxProvider: FC<{ initialState: Partial<State> }> = ({
  children,
  initialState = {}
}) => {
  const store = getConfiguredStore(initialState);

  return <Provider store={ store }>{ children }</Provider>;
};
