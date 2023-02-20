import React from "react";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./globalClasses/Navbar";
import ContactHome from "./pages/ContactHome";
import ProjectHome from "./pages/ProjectHome";
import DashBoard from "./pages/DashBoard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./Hook/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={!user ? <ProjectHome /> : <Navigate to="/dash" />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/dash" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/dash" />}
            />
            <Route path="/contact" element={<ContactHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/dash"
              element={user ? <DashBoard /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
