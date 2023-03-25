import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EventTile = ({ e }) => {
  return (
    <div className="eventTile">
      <p key={e._id}>
        {">"} {e.eventName}
      </p>
      <p className="eventOrganizer">
        &bull;{" "}
        {formatDistanceToNow(new Date(e.eventDateAndTime), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
};

export default EventTile;
