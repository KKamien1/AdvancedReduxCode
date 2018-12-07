import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //call an action creator
    // add save the comment
    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Comment Box</h4>
        <textarea
          name=""
          value={this.state.comment}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
