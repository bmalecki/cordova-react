import "babel-polyfill";
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import configureStore from './store/configureStore';
import {App} from './components/App';

let store = configureStore();

require('./style/app.scss');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
