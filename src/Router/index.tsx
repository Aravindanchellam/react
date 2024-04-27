import { Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
import About from "../Screen/About";
import Contact from "../Screen/Contact";
import React from "react";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MainRouter;
