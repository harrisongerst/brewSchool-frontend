import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'

export default function Show(props) {
  const {ID} = useParams()
  const [post, setPost] = useState(null);
  const getPostDataByID = async () => {
    const response = await fetch(props.URL + "posts/" + ID);
    console.log(response)
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => getPostDataByID(), []);

  const loaded = () => {
    return(<div>{post.title}</div>)
  }

  const notLoaded = () => {
    return(<div>Brewing..</div>)
  }
  return (
    <div>
      <Header/>
      {post ? loaded() : notLoaded()}
    
    </div>
  )
}
