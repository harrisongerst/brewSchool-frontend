import React from 'react';
import Header from '../components/Header';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom"



export default function Home(props) {
    const [posts, setPosts] = useState(null);

    const getPostData = async () => {
        const response = await fetch(props.URL + "posts");

        const data = await response.json();

        setPosts(data)
    }

    useEffect(() => getPostData());

    const loaded = () => {
        return posts.map((post) => (
          <div key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h1>{post.title}</h1>
            </Link>
            <h3>{post.description}</h3>
          </div>
        ));
      };

    const notLoaded = () => (
        <div>Brewing..</div>
    )
  return (
    <div>
        <Header/>
        <div>{posts ? loaded() : notLoaded()}</div>
    </div>
  )
}
