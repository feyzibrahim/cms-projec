import React from "react";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./globalClasses/Navbar";
import ContactHome from "./pages/ContactHome";
import ProjectHome from "./pages/ProjectHome";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dash" element={<ProjectHome />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
