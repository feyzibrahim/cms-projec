import React from "react";

const MeetingRows = ({ meeting }) => {
  return (
    <div className="meetingRows">
      <div>
        <p>{meeting.meeting_name}</p>
      </div>
      <div>
        <p>{meeting.organized_by}</p>
      </div>
      <div>
        <p>{meeting.location}</p>
      </div>
      <div>
        <p>{meeting.timestamps}</p>
      </div>
      <div>
        <p>{meeting.isOver ? "Completed" : "Coming"}</p>
      </div>
    </div>
  );
};

export default MeetingRows;
