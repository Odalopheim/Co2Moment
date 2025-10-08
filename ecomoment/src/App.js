import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import MinSide from "./MinSide";
import Innstillinger from "./Innstillinger";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MinSide" element={<MinSide />} />
        <Route path="/Innstillinger" element={<Innstillinger />} />
      </Routes>
    </Router>
  );
}
