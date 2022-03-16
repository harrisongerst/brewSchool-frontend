import React from "react";
import Form from "react-bootstrap/Form";

export default function FilterForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Brew Type</Form.Label>
          <Form.Check
            type="radio"
            name="brewType"
            value="Pourover"
            label="Pourover"
          />
          <Form.Check
            type="radio"
            name="brewType"
            value="Aeropress"
            label="Aeropress"
          />
          <Form.Check
            type="radio"
            name="brewType"
            value="Other"
            label="Other"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Coffee Amount</Form.Label>
          <Form.Check
            type="radio"
            name="brewType"
            value="Less than 10g"
            label="Less than 10g"
          />
          <Form.Check
            type="radio"
            name="brewType"
            value="Between 10g and 20g"
            label="Between 10g and 20g"
          />
          <Form.Check
            type="radio"
            name="brewType"
            value="Greater than 20g"
            label="Greater than 20g"
          />
        </Form.Group>
      </Form>
    </div>
  );
}
