import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";


import './App.css';
import Add from './pages/Add';
import Home from './pages/Home';
import View from './pages/View';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;