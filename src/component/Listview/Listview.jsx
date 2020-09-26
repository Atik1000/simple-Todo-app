import React from "react";
import PropTypes from 'prop-types';
import { CustomInput, ListGroupItem, Button } from "reactstrap";


// List Item component

const Listview = ({ todo, toggleSelect, toggleComplete }) => {
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

ListGroupItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}

export default Listview;
