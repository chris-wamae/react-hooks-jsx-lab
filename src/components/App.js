import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home id="home" style="firebrick" />
      <About />
    </div>
  );
}

export default App;
