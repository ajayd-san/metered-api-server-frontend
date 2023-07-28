import { Form, Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/Navbar";
import ApiKeyForm from "./components/Inputs";
import Response from "./components/ResponseArea";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App" data-bs-theme="dark">
      <CustomNav></CustomNav>
      <Container>
        <Row>
          <ApiKeyForm setResponseArea={setResponse}></ApiKeyForm>
        </Row>

        <Row>
          <Response response={response}></Response>
        </Row>
      </Container>
    </div>
  );
}

export default App;
