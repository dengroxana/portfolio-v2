import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
<div className="sideBar">
      <NavBar />
      <div className="content">
      <Header />
      
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
