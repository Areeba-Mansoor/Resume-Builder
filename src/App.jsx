import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home/Home";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import About from "./components/pages/About/About";
import CreateResume from "./components/pages/CreateResume";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<CreateResume />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
