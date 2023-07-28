import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

async function callApi(apiKey, setResponseArea) {
  var config = {};

  if (apiKey.trim() != "") {
    console.log("settings header");
    config = {
      headers: {
        Authorization: apiKey,
      },
    };
  }
  try {
    const res = await axios.get(
      process.env.REACT_APP_AWS_END_POINT + "/get",
      config
    );
    setResponseArea(res.data);
  } catch (error) {
    alert(error);
  }
}

async function getApiKey(setResponseArea) {
  try {
    const res = await axios.get(
      process.env.REACT_APP_AWS_END_POINT + "/register"
    );
    setResponseArea(res.data);
  } catch (error) {
    alert(error);
  }
}

function ApiKeyForm({ setResponseArea }) {
  const [key, setKey] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="keyform">
        <Form.Label>API Key</Form.Label>
        <Form.Control
          type="text"
          placeholder="API Key (optional)"
          onChange={(e) => setKey(e.target.value)}
        />
      </Form.Group>

      <Button onClick={() => callApi(key, setResponseArea)}>
        {key.trim().length > 0 ? "Get with API key" : "Get with IP"}
      </Button>
      <Button onClick={() => getApiKey(setResponseArea)}>Get API Key</Button>
    </Form>
  );
}

export default ApiKeyForm;
