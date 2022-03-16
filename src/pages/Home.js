import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import BrewCard from "../components/BrewCard";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";

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
      <Container>
        <Sidebar />
        <div>{posts ? loaded() : notLoaded()}</div>
      </Container>
    </div>
  );
}
