import React from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";

class Form extends React.Component {
  state = {
    newTodo: ""
  };

  handleChange = event => {
    this.setState({ newTodo: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const todo = this.state.newTodo;

    this.props.onTodoAdd({ id: id, todo: todo });
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <input
              value={this.state.newTodo}
              onChange={this.handleChange}
              type="text"
              placeholder="Ajouter une tache"
            />
          </div>
          <div className="button">
            <button className="border-button"> +</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
