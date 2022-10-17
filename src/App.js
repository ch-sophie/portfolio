import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Main from "./components/main";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    </div>
  );
}

export default App;