import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import shortid from 'shortid';
import Listview from "../Listview/Listview";
import Tableview from "../Tableview/Tableview";
import Controller from "../Control/Controller";
import Createtodo from "../create-todo-form/Createtodo";

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
    isOpenTodoForm: false,
    searchTerm: "",
  };

  toggleSelect = (todoId) => {};
  toggleComplete = (todoId) => {};
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  handleSearch = () => {};
  createtodo = (todo) => {};

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todo</h1>
        <Controller
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
        ></Controller>
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
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo form
          </ModalHeader>
          <ModalBody>
            <Createtodo createtodo={this.createtodo}></Createtodo>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todo;
