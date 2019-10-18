import React from "react";

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

    this.props.onTodoAdd({ id, todo });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newTodo}
            onChange={this.handleChange}
            type="text"
            placeholder="Ajouter une tache"
          />
          <button>Valider</button>
        </form>
      </div>
    );
  }
}

export default Form;
