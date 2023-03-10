import React from "react";
import Comment from "./Comment";
import DataSource from "../data/DataSource";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments(),
      //"Hello",
    };
    this.state.comments.map((comment) => console.log(comment.id));
  }

  componentDidMount() {
    // Subscribe to changes
    //DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    //DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments(),
      //"Hello World",
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment.value} key={comment.id} />
        ))}
      </div>
    );
  }
}

export default CommentList;
