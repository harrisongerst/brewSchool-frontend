import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import React from 'react'

export default function Create(props) {

  const [equipmentInputs, setEquipmentInputs] = useState([1]);
  const [stepInputs, setStepInputs] = useState([1,2,3]);
  const [newForm, setNewForm] = useState({
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

  function addEquipmentInput(e) {
    e.preventDefault();
    equipmentInputs.length < 5
    ? setEquipmentInputs([...equipmentInputs, equipmentInputs[equipmentInputs.length-1]+1])
    : setEquipmentInputs([...equipmentInputs])

  }

  function removeEquipmentInput(e) {
    e.preventDefault();
    equipmentInputs.length > 1
    ? setEquipmentInputs(equipmentInputs.slice(0, equipmentInputs.length -1))
    : setEquipmentInputs([...equipmentInputs])

  }

  function addStepInput(e) {
    e.preventDefault();

  }
  
  function removeStepInput(e) {
    e.preventDefault();

  }

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
        
        <Form.Group className="mb-3">
          <Form.Label>Brew Type</Form.Label>
          <Form.Check type="radio" label="Pourover" />
          <Form.Check type="radio" label="Aeropress" />
          <Form.Check type="radio" label="Other" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Coffee Amount (in grams)</Form.Label>
          <Form.Control type="number" placeholder="Enter an amount of grams" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Is this for iced coffee?</Form.Label>
          <Form.Check type="checkbox" label="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Overall time to brew</Form.Label>
          <Form.Control type="number" placeholder="Enter the amount of time in seconds" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Required Equipment</Form.Label>
        {equipmentInputs.map(equipNum =>(
          <React.Fragment key={equipNum}>
            <Form.Control type="text" placeholder="Title" />
          </React.Fragment>
        ))}
        <Button variant="success" onClick={(e) => addEquipmentInput(e)} >Add Equipment</Button><Button onClick={(e) => removeEquipmentInput(e)} variant="danger">Remove Equipment</Button>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  );
}
