import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Todo from "./component/Todo/Todo";

function App() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
         <Todo></Todo>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
