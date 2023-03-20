import React, { useState } from "react";

const DashAnnounceForm = (props) => {
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementDiscription, setAnnouncementDiscription] = useState("");

  return (
    <div className="dashCreateForm">
      <div className="dashCForm">
        <div className="dashCHeader">
          <h2>New Announcement</h2>
          <span
            className="material-symbols-outlined"
            onClick={props.showAnnouFormOnClick}
          >
            Close
          </span>
        </div>
        <form>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter The Event Name"
            onChange={(e) => setAnnouncementTitle(e.target.value)}
            value={announcementTitle}
          />
          <label>
            Discription <span className="optional">(Optional)</span>
          </label>
          <textarea
            type="text"
            onChange={(e) => setAnnouncementDiscription(e.target.value)}
            value={announcementDiscription}
          />
          <button className="fullColeredButton">Create Announcement</button>
        </form>
      </div>
    </div>
  );
};

export default DashAnnounceForm;
