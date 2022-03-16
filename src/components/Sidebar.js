import React from 'react'
import { Container } from 'react-bootstrap';
import FilterForm from './FilterForm';

export default function Sidebar() {
  return (
    <div>
      <Container>
        <h1>Filter Results</h1>
        <FilterForm/>
      </Container>
    </div>
  )
}
