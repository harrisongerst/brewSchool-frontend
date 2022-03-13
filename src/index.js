import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Show from './pages/Show';
import Create from './pages/Create';
import Signup from './pages/Signup'
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "https://brew-school.herokuapp.com/"

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home URL={URL} />}>
      </Route>
      <Route path="create" element={<Create URL={URL}/>} />
      <Route path="recipe/:ID" element={<Show URL={URL}/>} />
      <Route path="signup" element={<Signup URL={URL}/>} />
      <Route path="login" element={<Login URL={URL}/>} />
    </Routes>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

