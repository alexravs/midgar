import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import gooMusicApp from './reducers/index';
import App from './components/App'

const loggerMiddleware = createLogger();

let store = createStore(
  gooMusicApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

console.log(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
