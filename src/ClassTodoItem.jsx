/* eslint-disable react/prop-types */
import { Component } from "react";

class ClassTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      todoName: this.props.todo,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleEdit() {
    // console.log({props: this.props})
    // console.log({state: this.state})
    this.setState((state) => ({
      ...state,
      editing: !state.editing,
    }));
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      todoName: e.target.value,
    }));
  }

  render() {
    return (
      <li>
        {this.state.editing ? (
          <input
            type="text"
            name="task-entry-edit"
            value={this.state.todoName}
            onChange={this.handleInputChange}
          />
        ) : (
          this.state.todoName
        )}
        {this.state.editing ? null : (
          <button
            onClick={() => {
              this.props.onTodoDelete();
              this.props.handleDelete();
            }}
          >
            Delete
          </button>
        )}

        <button
          onClick={() => {
            this.handleEdit();
          }}
        >
          {this.state.editing ? "Save Changes" : "Edit"}
        </button>
      </li>
    );
  }
}

export default ClassTodoItem;
