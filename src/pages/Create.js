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
        <input name="username" placeholder="username"/> 
        <br/>
        <input name="likes" placeholder="likes"/>
        <br/>
        <input name="title" placeholder="title"/>
        <br/>
        <input name="description" placeholder="description"/>
        <br/>
        <input name="date" placeholder="date"/>
        <br/>
        <div>
          <label>brew type: </label>
        <input type="radio" value="Pourover" name="brewType" />Pourover
        <input type="radio" value="Aeropress" name="brewType" />Aeropress
        <input type="radio" value="Other" name="brewType" />Other
        </div>
        <input name="coffeeAmount" placeholder="coffeeAmount"/>
        <br/>
        <label>Iced?: </label>
        <input type="checkbox" value="true" name="iced" placeholder="iced"/>
        <br/>
        <input type="number" name="brewTimeSeconds" placeholder="brewTimeSeconds"/>
        <br/>
        <input name="requiredEquipment" placeholder="requiredEquipment"/>
        <br/>
        <input name="instructions" placeholder="instructions"/>
      </form>
    </div>
  )
}
