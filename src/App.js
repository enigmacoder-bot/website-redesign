// import './App.css';

import React from "react";
import "./index.css";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import About from "./pages/aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home val="1" />} />
        <Route path="/about" element={<About val="4" />} />
        <Route path="/blog" element={<Blog val="2" />} />
        <Route path="/contact" element={<Contact val="3" cor={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
