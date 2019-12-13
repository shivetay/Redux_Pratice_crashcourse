import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostForm from './PostForm';

export class Post extends Component {
  static propTypes = {
    posts: PropTypes.any,
    fetchPosts: PropTypes.func,
  };

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  // onSubmit = (e, id, title, body) => {
  //   e.preventDefault();
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/posts', {
  //       id,
  //       title,
  //       body,
  //     })
  //     .then(res =>
  //       this.setState({
  //         posts: [...this.state.posts, res.data],
  //       })
  //     );
  // };

  render() {
    console.log('props', this.props);
    const { posts } = this.props;
    return (
      <div>
        <PostForm addPost={this.onSubmit} />
        <br />
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
