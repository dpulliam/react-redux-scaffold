import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import io from 'socket.io-client';
import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import SampleComponent from './components/SampleComponent'

const store = createStore(reducer);

const routes = <Route component={App}>
  <Route path="/" component={SampleComponent} />
</Route>

//const socket = io(`${location.protocol}//${location.hostname}:9090`);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
