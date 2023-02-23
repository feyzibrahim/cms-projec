import React from "react";
import { useState } from "react";

const Dash = () => {
  var today = new Date(),
    date = today.toTimeString();

  const [college] = useState({
    college: "Lissah College",
    place: "Kaithapoyil",
    teachersCount: 57,
    StudentsCount: 650,
    staffCount: 8,
  });

  return (
    <div className="dashHomee">
      <div className="dHomeNav">
        <div className="dHomeNavLeft">
          <h1>Dashboard</h1>
          <p>{date}</p>
        </div>
        <div className="dHomeNavRight">
          <h2>
            {college.college}, {college.place}
          </h2>
          <span className="material-symbols-outlined">notifications</span>
        </div>
      </div>
    </div>
  );
};

export default Dash;
