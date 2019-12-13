import Axios from 'axios';

/* action type */

const FETCH_POSTS = 'FETCH_POSTS';

/* action creator */
export const fetchStarted = payload => ({ payload, type: FETCH_POSTS });

/* thunk */
export const fetchFromApi = () => {
  return (dispatch, getState) => {
    Axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then(res =>
      dispatch(fetchStarted(res.data))
    );
  };
};

/* reducer */
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}
