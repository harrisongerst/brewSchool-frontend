import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default function Show(props) {
  const navigate = useNavigate()
  const { ID } = useParams();
  const [post, setPost] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPostDataByID = async () => {
    const response = await fetch(props.URL + "posts/" + ID);
    console.log(response);
    const data = await response.json();
    setPost(data);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const URL = props.URL + "posts/" + ID;
    try{
     const res = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      }});
      console.log(res)
    }
    catch (error){
      console.log(error);
    }
    navigate("/", {replace: true})
  }

  useEffect(() => getPostDataByID(), []);

  const loaded = () => {
    return (<div>
      <h1>{post.title}</h1>
      <h2>By: {post.username}</h2>
      <p>{post.description}</p>
      <p>Required Equipment</p>
      {post.requiredEquipment.map((item, i) => (
        <p>{i+1}.  {item}</p>
      ))}
      <p>Instructions</p>
      {post.instructions.map((step, i) => (
        <p>{i+1}.  {step}</p>
      ))}
      <Button variant="danger" onClick={handleShow}>
        DELETE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>There is no way to undo this once it is done.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Nevermind
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>);
  };

  const notLoaded = () => {
    return <div>Brewing..</div>;
  };
  return (
    <div>
      <Header />
      {post ? loaded() : notLoaded()}
    </div>
  );
}
