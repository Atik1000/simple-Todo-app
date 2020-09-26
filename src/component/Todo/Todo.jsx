import React, { Component } from "react";
import Listview from "../Listview/Listview";
import Tableview from "../Tableview/Tableview";

class Todo extends Component {
  state = {
    todos: [
      {
        id: "",
        text: "",
        description: "",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "",
        text: "",
        description: "",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
  };

  toggleSelect = (todoId) => {};
  toggleComplete = (todoId) => {};
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todo</h1>
        <div>
          <Listview
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          ></Listview>
        </div>
        <div>
        <Tableview
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        ></Tableview>
      </div>
      </div>
    );
  }
}

export default Todo;
