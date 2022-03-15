import { useState } from "react";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import React from 'react'

export default function Create(props) {


  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    brewType: "",
    coffeeAmount: "",
    iced: "",
    brewTimeSeconds: "",
    requiredEquipment: "",
    instructions: [],
  });

  const handleChange = (e) => {
    setNewForm({...newForm, [e.target.name] : e.target.value})
  }

  const handleChangeCheckbox = (e) => {
    setNewForm({...newForm, iced: e.target.checked})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newForm);
  }
 
  return (
    <div>
      <Header />
      <Container className="my-3">
      <h1>Create New Brew</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={newForm.title} onChange={handleChange} placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" as="textarea" name="description" rows={2} value={newForm.description} onChange={handleChange} placeholder="Enter a short description of your brew technique" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Brew Type</Form.Label>
          <Form.Check type="radio" name="brewType" onChange={handleChange} value="Pourover" label="Pourover" />
          <Form.Check type="radio" name="brewType" onChange={handleChange} value="Aeropress" label="Aeropress" />
          <Form.Check type="radio" name="brewType" onChange={handleChange} value="Other" label="Other" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Coffee Amount (in grams)</Form.Label>
          <Form.Control type="number" name="coffeeAmount" value={newForm.coffeeAmount} onChange={handleChange} placeholder="Enter an amount of grams" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Is this for iced coffee?</Form.Label>
          <Form.Check type="checkbox" name="iced" onChange={handleChangeCheckbox} value="true" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Overall time to brew</Form.Label>
          <Form.Control type="number" name="brewTimeSeconds" value={newForm.brewTimeSeconds} onChange={handleChange} placeholder="Enter the amount of time in seconds" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Required Equipment</Form.Label>
          <Form.Control type="text" name="brewTimeSeconds" value={newForm.requiredEquipment} onChange={handleChange} placeholder="Enter equipment seperated by a comma EXAMPLE: 'Kettle, Water '" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Instruction steps</Form.Label>
          <Form.Control type="textarea" as="textarea" name="description" rows={3} value={newForm.instructions} onChange={handleChange} placeholder="Enter individual steps seperated by a comma" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  );
}
