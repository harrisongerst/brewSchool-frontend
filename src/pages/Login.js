import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Login(props) {
    const URL = props.URL 
    const navigate = useNavigate()
    function handleLogin(e) {
        e.preventDefault();
        
        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        }

        fetch(URL + "login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token)
        })
    }

    useEffect(() => {
        fetch(URL + "userLoggedIn", {
            headers: { "x-access-token": localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? navigate("/", {replace: true}): null)
    }, [])


  return (
    <div>
      <Header/>
    <Container className="my-3">
      <h2>Login</h2>
      <Form onSubmit={event => handleLogin(event)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter a username" name="username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Container>
  </div>
  )
}