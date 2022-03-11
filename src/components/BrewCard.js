import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export default function BrewCard(props) {
  return (
    <div>
      <Card>
        <Card.Title><Card.Link as={Link} to={`recipe/${props.post._id}`}>{props.post.title}</Card.Link></Card.Title>
        <Card.Text>{props.post.description}</Card.Text>
        
      </Card>
    </div>
  )
}
