// import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main />} />
    </Routes>
    </div>
  );
}

export default App;