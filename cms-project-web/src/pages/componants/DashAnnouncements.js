import React, { useState } from "react";
import DashAnnounceForm from "./DashAnnounceForm";

const DashAnnouncements = () => {
  const [showAnnouForm, setShowAnnouForm] = useState(false);

  const showAnnouFormOnClick = () => {
    setShowAnnouForm(!showAnnouForm);
  };
  return (
    <div className="dashCollegeDetailRight">
      {showAnnouForm && (
        <DashAnnounceForm showAnnouFormOnClick={showAnnouFormOnClick} />
      )}
      <div className="dashAnnounNav">
        <h3>Announcements</h3>
        <button
          className="fullColeredButton"
          onClick={() => {
            showAnnouFormOnClick();
          }}
        >
          New Announcement
        </button>
      </div>

      <p>{">"} No New Announcements</p>
    </div>
  );
};

export default DashAnnouncements;
