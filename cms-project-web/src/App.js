import React from "react";
import Navbar from "./globalClasses/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import ProjectHome from "./pages/ProjectHome";
import ContactHome from "./pages/ContactHome";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProjectHome />} />
            <Route path="/create" element={<Create />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
