import "./App.css";
import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Users from "./page/Users";
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
