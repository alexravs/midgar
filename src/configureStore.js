import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import gooMusicApp from './reducers/index';

const configureStore = () => {
  const loggerMiddleware = createLogger();

  let store = createStore(
    gooMusicApp,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return store;
};

export default configureStore;
