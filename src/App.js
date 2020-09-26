import React from "react";
import { Col, Container, Row } from "reactstrap";

import "./App.css";
import Index from "./component/Todo/Index";

function App() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Index></Index>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
