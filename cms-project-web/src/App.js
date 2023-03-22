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
import DashBoard from "./pages/DashBoard";
import Dues from "./pages/dashPages/Dues";
import Meatings from "./pages/dashPages/meetings/Meatings";
import Teachers from "./pages/dashPages/workouts/Teachers";
import Teacher from "./pages/dashPages/teacher/Teacher";
import Departments from "./pages/dashPages/department/Departments";
import Settings from "./pages/dashPages/Settings";
import Dash from "./pages/dashPages/dashboard/Dash";

import { useAuthContext } from "./Hook/contextHooks/useAuthContext";

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
              <Route path="dues" element={<Dues />} />
              <Route path="meatings" element={<Meatings />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="teacher" element={<Teacher />} />
              <Route path="settings" element={<Settings />} />
              <Route path="departments" element={<Departments />} />
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
