import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Show from './pages/Show'

const URL = "https://brew-school.herokuapp.com/"

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home URL={URL} />}>
      </Route>
      <Route path="/recipe/:ID" element={<Show URL={URL}/>} />
    </Routes>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

