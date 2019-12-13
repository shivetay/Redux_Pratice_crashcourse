import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import postReducer from './reducers/postReducers';

const initialState = {
  posts: {
    data: {},
  },
};

const reducers = {
  posts: postReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (state = null) => state;
  }
});

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
