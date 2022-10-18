// import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./components/main";
import About from "./components/about";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;