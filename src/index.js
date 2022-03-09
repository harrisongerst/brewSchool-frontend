import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

const URL = "https://brew-school.herokuapp.com/"

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home URL={URL}/>}>
        
      </Route>
    </Routes>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

