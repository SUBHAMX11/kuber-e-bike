import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Models from "./components/Models";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <About />
      <Models />
      <Contact />
    </div>
  );
}

export default App;
