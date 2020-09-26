import React from "react";
import PropTypes from "prop-types";
import { Button, CustomInput, Table } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <td scope="row">
      <CustomInput
        type="checkbox"
        id={todo.id}
        checked={todo.isSelected}
        onChange={() => toggleSelect(todo.id)}
      ></CustomInput>
    </td>
    <td>{todo.time.toDateString()}</td>
    <td>{todo.text}</td>
    <td>
      <Button
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "completed" : "running"}
      </Button>
    </td>
  </tr>
);

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const Tableview = ({ todos, toggleSelect, toggleComplete }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        ></RowItem>
      ))}
    </tbody>
  </Table>
);

Tableview.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};
export default Tableview;