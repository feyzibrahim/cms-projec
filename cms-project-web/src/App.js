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
import { useAuthContext } from "./Hook/useAuthContext";
import DashBoard from "./pages/DashBoard";
import Dues from "./pages/dashPages/Dues";
import Meatings from "./pages/dashPages/Meatings";
import Teachers from "./pages/dashPages/Teachers";
import Courses from "./pages/dashPages/Courses";
import Classes from "./pages/dashPages/Classes";
import Settings from "./pages/dashPages/Settings";
import Dash from "./pages/dashPages/Dash";

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
              path="login"
              element={!user ? <LoginPage /> : <Navigate to="/dash" />}
            />
            <Route
              path="signup"
              element={!user ? <SignUp /> : <Navigate to="/dash" />}
            />
            <Route
              path="/dash"
              element={user ? <DashBoard /> : <Navigate to="/" />}
            >
              <Route index element={<Dash />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="dues" element={<Dues />} />
              <Route path="meatings" element={<Meatings />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="courses" element={<Courses />} />
              <Route path="settings" element={<Settings />} />
              <Route path="classes" element={<Classes />} />
            </Route>
            <Route path="contact" element={<ContactHome />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
