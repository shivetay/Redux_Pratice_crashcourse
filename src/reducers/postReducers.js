import axios from 'axios';

// const reducerName = 'posts';
// const createActionName = name => `/${reducerName}/${name}`;

//action types
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POSTS = 'NEW_POSTS';

//action creator

export const fetchStarted = payload => ({
  payload,
  type: FETCH_POSTS,
});

//thunk
export const fetchFromApi = () => {
  return (dispatch, getState) => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then(res =>
      dispatch({
        type: fetchStarted(res.data),
      })
    );
  };
};

export default function(state = [], action = {}) {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}