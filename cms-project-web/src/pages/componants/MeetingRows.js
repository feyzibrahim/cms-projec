import React from "react";
import { useAuthContext } from "../../Hook/contextHooks/useAuthContext";
import { useMeetingContext } from "../../Hook/contextHooks/useMeetingContext";

const MeetingRows = ({ meeting }) => {
  const { user } = useAuthContext();
  const { dispatch } = useMeetingContext();

  const handleUpdate = async () => {
    const isOver = true;

    if (!user) {
      return;
    }

    const meetinghere = {
      isOver,
    };

    const response = await fetch("/api/meetings/" + meeting._id, {
      method: "PATCH",
      body: JSON.stringify(meetinghere),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_MEETING", payload: json });
      console.log("Data updated" + json);
    }

    if (!response.ok) {
      console.log(response.error);
    }
  };

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/meetings/" + meeting._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_MEETING", payload: json });
      console.log("Data updated" + json);
    }

    if (!response.ok) {
      console.log(response.error);
    }
  };

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
      <div className="meetingComplete">
        {meeting.isOver ? (
          <button className="fullColeredButton" onClick={handleDelete}>
            <span className="material-symbols-outlined">Delete</span>
            <p>Delete</p>
          </button>
        ) : (
          <button className="fullColeredButton" onClick={handleUpdate}>
            <span className="material-symbols-outlined">Check</span>
            <p>Mark As Read</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default MeetingRows;
