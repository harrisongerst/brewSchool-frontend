import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create(props) {
  const [newForm, setNewForm] = useState({
    username: "",
    likes: "",
    title: "",
    description: "",
    date: "",
    brewType: "",
    coffeeAmount: "",
    iced: "",
    brewTimeSeconds: "",
    requiredEquipment: [],
    instructions: []
  })
  return (
    <div>
      <h1>Create New Brew</h1>
      <form>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
        <br/>
        <input label="username"></input>
      </form>
    </div>
  )
}
