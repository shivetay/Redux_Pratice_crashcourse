import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  onChange = e => {
    this.setState({
      // e.target.name zawsze będzie targetował pole z value i zmieniał jego stan
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1> Add Post </h1>
        <form onSubmit={this.props.addPost}>
          <div>
            <label>Title: </label>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body: </label>
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
