import React from "react";
// import "./App.css";
import Header from "./Components/Header/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stackoverflow from "./Components/Stackoverflow";
import Question from "./Components/Add-question/Question.js";
import ViewQuestion from "./Components/ViewQuestion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/add-question" element={<Question />}></Route>
          <Route exact path="/" element={<Stackoverflow />}></Route>
          <Route exact path="/question" element={<ViewQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
