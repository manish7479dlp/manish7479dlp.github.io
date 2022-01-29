import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Menu from "components/Menu";
import Contact from "components/Contact";
import Project from "components/Project";
import Skills from "components/Skills";
import Footer from "components/Footer";

import "styles/main.css";

const Error = () => {
  return <>OOPS Page not found...</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
