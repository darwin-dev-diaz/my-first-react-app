/* eslint-disable react/prop-types */
import { Component } from "react";

class ClassCount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.todoCount}</div>;
  }
}

export default ClassCount;
