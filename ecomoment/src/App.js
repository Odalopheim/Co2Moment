import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}
