import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Play from "./pages/Play/Play";
import Contact from "./pages/Contact/Contact";

function App() {
  return <div>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Play" element={<Play/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
}

export default App;
