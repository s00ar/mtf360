import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Routes>
              <Route exact path="/" element={
                <Home />
              }>
              </Route>
              <Route path="/services" element={
                <Services />
              }>
              </Route>
              <Route path="/work" element={
                <Work />
              }>
              </Route>
              <Route path="/contact" element={
                <Contact />
              }>
              </Route>
        </Routes>
      </div>
  );
}

export default App;
