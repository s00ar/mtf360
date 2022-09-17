import './App.css';
import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
