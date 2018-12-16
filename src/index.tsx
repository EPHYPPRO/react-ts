import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import registerServiceWorker from './registerServiceWorker';
import { configStore } from './store';
import { Provider } from 'react-redux';

const store = configStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
