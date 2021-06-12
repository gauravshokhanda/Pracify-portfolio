import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Banner />
      <Nav /> 
      <Portfolio />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;