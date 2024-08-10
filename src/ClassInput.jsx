/* eslint-disable react/prop-types */
import { Component } from "react";
import ClassTodoItem from "./ClassTodoItem";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onTodoAdd();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(key) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo !== key),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, i) => (
            <ClassTodoItem
              key={i}
              todo={todo}
              onTodoDelete={this.props.onTodoDelete}
              handleDelete={()=>{this.handleDelete(todo)}}
            ></ClassTodoItem>
            // <li key={todo}>
            //   {todo}
            //   <button
            //     onClick={() => {
            //       this.props.onTodoDelete();
            //       this.handleDelete(todo);
            //     }}
            //   >
            //     Delete
            //   </button>
            //   <button
            //     onClick={() => {
            //         null
            //     }}
            //   >
            //     Edit
            //   </button>
            // </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
