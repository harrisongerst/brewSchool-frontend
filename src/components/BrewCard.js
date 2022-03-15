import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function BrewCard(props) {
  return (
    <div>
      <Card>
        <Card.Title><Card.Link as={Link} to={`recipe/${props.post._id}`}>{props.post.title}</Card.Link> by {props.post.username}</Card.Title>
        <Card.Body><Card.Text>{props.post.description}</Card.Text><Card.Text>Likes: {props.post.likes}</Card.Text><Button>Like</Button></Card.Body>
        <Card.Footer>{props.post.date}</Card.Footer>
      </Card>
    </div>
  )
}
