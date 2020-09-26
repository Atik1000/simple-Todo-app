import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from "reactstrap";

class CreateTodoForm extends Component {
  state = {
    text: "",
    description: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <label>Enter task</label>
          <Input
            placeholder="do some code"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
        <label>Describe task</label>
        <Input
        type='textarea'
          placeholder="write description about task"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        ></Input>
      </FormGroup>
      <Button type='submit'>create Task</Button>
      </Form>
    );
  }
}
CreateTodoForm.propTypes={
    createTodo: PropTypes.func.isRequired,
}

export default CreateTodoForm;
