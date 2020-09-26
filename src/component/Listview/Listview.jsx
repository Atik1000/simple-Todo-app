import React from "react";
import PropTypes from "prop-types";
import { CustomInput, ListGroupItem, Button, ListGroup } from "reactstrap";

// List Item component

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <div>
      <ListGroupItem className="d-flex align-items-center">
        <CustomInput
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        ></CustomInput>
        <div className="mx-3">
          <h4>{todo.text}</h4>
          <p>{todo.time.toDateString()}</p>
        </div>
        <Button
          className="ml-auto"
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "completed" : "running"}
        </Button>
      </ListGroupItem>
    </div>
  );
};

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};
// List view component

const Listview = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        ></ListItem>
      ))}
    </ListGroup>
  );
};

Listview.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};
export default Listview;
