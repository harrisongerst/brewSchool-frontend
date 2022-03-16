import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import BrewCard from "../components/BrewCard";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home(props) {
  const [posts, setPosts] = useState(null);

  const getPostData = async () => {
    const response = await fetch(props.URL + "posts");

    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => getPostData(), []);

  const loaded = () => {
    return posts.map((post) => (
      <div key={post._id}>
        <BrewCard post={post} />
      </div>
    ));
  };

  const notLoaded = () => <div>Brewing..</div>;
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <h1>All Brews:</h1>
            <div>{posts ? loaded() : notLoaded()}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
