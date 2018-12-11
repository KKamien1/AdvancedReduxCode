import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return <div>{this.renderComments()}</div>;
  }
}

const mapStatetoProps = state => ({
  comments: state.comments
});

export default connect(mapStatetoProps)(CommentList);
