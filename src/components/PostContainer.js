import { connect } from 'react-redux';
import Post from './Post';
import { getAll, fetchFromApi } from '../reducers/postReducers';

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
