import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home.js'
import Navbar from "./Components/Navbar.js";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
