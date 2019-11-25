import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import postReducers from './reducers/postReducers';

const initialState = {
  // posts: {
  //   data: {},
  // },
  items: [],
  item: {},
};

const reducers = {
  posts: postReducers,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
