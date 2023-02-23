import React, { useState } from "react";

const Classes = () => {
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
    <div className="Classeshome">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Classes</h1>
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
    </div>
  );
};

export default Classes;
