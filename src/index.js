import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home/>}>
        
      </Route>
    </Routes>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

