/* eslint-disable react/prop-types */
import { Component } from "react";
import ClassCount from "./ClassCount";
import ClassInput from "./ClassInput";

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoCount: 0,
    };

    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
  }

  handleTodoAdd() {
    this.setState((state) => ({
      todoCount: state.todoCount + 1,
    }));
  }
  handleTodoDelete() {
    this.setState((state) => ({
      todoCount: state.todoCount - 1,
    }));
  }

  render() {
    return (
      <>
        <ClassCount todoCount={this.state.todoCount}></ClassCount>
        <ClassInput
          name="test"
          onTodoAdd={this.handleTodoAdd}
          onTodoDelete={this.handleTodoDelete}
        ></ClassInput>
      </>
    );
  }
}

export default ClassApp;
