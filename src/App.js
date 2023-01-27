import React from "react";
// import "./App.css";
import Header from "./Components/Header/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stackoverflow from "./Components/Stackoverflow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Stackoverflow />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
