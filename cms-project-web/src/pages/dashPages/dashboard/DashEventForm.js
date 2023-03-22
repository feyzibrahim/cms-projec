import React, { useState } from "react";

const DashEventForm = (props) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventRemarks, setEventRemarks] = useState("");

  return (
    <div className="dashCreateForm">
      <div className="dashCForm">
        <div className="dashCHeader">
          <h2>New Event</h2>
          <span
            className="material-symbols-outlined"
            onClick={props.showDashCreateFormOnClick}
          >
            Close
          </span>
        </div>
        <form>
          <label>Event Name</label>
          <input
            type="text"
            placeholder="Enter The Event Name"
            onChange={(e) => setEventName(e.target.value)}
            value={eventName}
          />
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => setEventDate(e.target.value)}
            value={eventDate}
          />
          <label>Time</label>
          <input
            type="time"
            onChange={(e) => setEventTime(e.target.value)}
            value={eventTime}
          />
          <label>Oraganized By</label>
          <input
            type="text"
            placeholder="Organizers Name Here"
            onChange={(e) => setEventOrganizer(e.target.value)}
            value={eventOrganizer}
          />
          <label>
            Remarks <span className="optional">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="If any notes regarding the events"
            onChange={(e) => setEventRemarks(e.target.value)}
            value={eventRemarks}
          />
          <button className="fullColeredButton">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default DashEventForm;
