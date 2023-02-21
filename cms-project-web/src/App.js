import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./globalClasses/Navbar";
import ContactHome from "./pages/ContactHome";
import ProjectHome from "./pages/ProjectHome";
import Dash from "./pages/Dash";
import { useAuthContext } from "./Hook/useAuthContext";
import DashBoard from "./pages/DashBoard";
import Dues from "./pages/Dues";
import Meatings from "./pages/Meatings";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Classes from "./pages/Classes";
import Settings from "./pages/Settings";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
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
            <Route
              path="/dash"
              element={user ? <Dash /> : <Navigate to="/" />}
            />
            <Route path="/contact" element={<ContactHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dues" element={<Dues />} />
            <Route path="/meatings" element={<Meatings />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/classes" element={<Classes />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
