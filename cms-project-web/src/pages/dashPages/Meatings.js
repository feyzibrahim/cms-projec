import React, { useState, useEffect } from "react";
import Loader from "../../globalClasses/Loader";
import { useAuthContext } from "../../Hook/useAuthContext";
import MeetingRows from "../componants/MeetingRows";

const Meatings = () => {
  var today = new Date(),
    date = today.toTimeString();

  const { user } = useAuthContext();
  const [meetings, setMeetings] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortConst = new AbortController();
    const fetchData = async () => {
      const response = await fetch("/api/meetings", {
        signal: abortConst.signal,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setMeetings(json);
        console.log(json);
        setIsPending(false);
      }
      if (!response.ok) {
        console.log(json.error);
      }
    };

    fetchData();
    return () => abortConst.abort();
  }, []);

  return (
    <div className="Meatingshome addSomeMargin">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Meatings</h1>
            <p>{date}</p>
          </div>
          <div className="dHomeNavRight">
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </div>
        <div className="meetingsContainer">
          {isPending && <Loader />}
          <div className="meetingRows">
            <div>
              <p>Meeting Name</p>
            </div>
            <div>
              <p>Organized By</p>
            </div>
            <div>
              <p>Location</p>
            </div>
            <div>
              <p>Time and Date</p>
            </div>
            <div>
              <p>Status</p>
            </div>
          </div>
          {meetings &&
            meetings.map((meeting) => <MeetingRows meeting={meeting} />)}
        </div>
      </div>
    </div>
  );
};

export default Meatings;
