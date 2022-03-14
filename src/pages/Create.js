import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"

export default function Create(props) {
  const [newForm, setNewForm] = useState({
    username: "",
    likes: "",
    title: "",
    description: "",
    date: "",
    brewType: "",
    coffeeAmount: "",
    iced: "",
    brewTimeSeconds: "",
    requiredEquipment: [],
    instructions: [],
  });
  return (
    <div>
      <Header />
      <Container className="my-3">
      <h1>Create New Brew</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" as="textarea" rows={2} placeholder="Enter a short description of your brew technique" />
        </Form.Group>
        
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  );
}
