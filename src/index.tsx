import "babel-polyfill";

import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './store/configureStore';
import {App} from './components/App';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

require('./style/app.scss');


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={App}/>
        <Route path="bar" component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
