import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProvider } from "./context/WorkoutContext";
import { AuthContextProvider } from "./context/AuthContext";
import { DepartmentContextProvider } from "./context/DepartmentContext";
import { MeetingContextProvider } from "./context/MeetingContext";
import { TeacherContextProvider } from "./context/TeacherContext";
import { EventContextProvider } from "./context/EventContext";
import { AnnouncementContextProvider } from "./context/AnnouncementContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <WorkoutsContextProvider>
      <DepartmentContextProvider>
        <MeetingContextProvider>
          <TeacherContextProvider>
            <EventContextProvider>
              <AnnouncementContextProvider>
                <App />
              </AnnouncementContextProvider>
            </EventContextProvider>
          </TeacherContextProvider>
        </MeetingContextProvider>
      </DepartmentContextProvider>
    </WorkoutsContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
