import { connect } from 'react-redux';
import Post from './Post';
import { fetchFromApi } from '../reducers/postReducers';

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
