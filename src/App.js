import "./App.css";
import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
