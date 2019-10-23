import React from "react";
import "./App.css";
import Todo from "./Todo";
import Form from "./Form";
// adapter la taille du container quand il y a bcp de to
// Ajouter checked ( avec la coche)
// Enregistrer - stocker la base de donnée de la todo + checked = dans un objet - boucle dans l'objet

class App extends React.Component {
  state = {
    todos: [
      { id: 1, todo: "Documentation React " },
      { id: 2, todo: "Tuto React " },
      { id: 3, todo: "Projet " }
    ]
  };
  // SUPPRIMER UNE TACHE

  handleDelete = id => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleAdd = todo => {
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
  };

  render() {
    const title = "Ma To Do List";

    return (
      <div className="container">
        <h1 className="title">{title}</h1>

        <ul className="todos">
          {this.state.todos.map((item, index) => (
            <Todo key={index} details={item} onDelete={this.handleDelete} />
          ))}
        </ul>

        <Form onTodoAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
