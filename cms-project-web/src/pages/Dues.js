import React, { useState } from "react";
// import useFetch from "../Hook/useFetch";
import VerticalNavbar from "../globalClasses/VerticalNavbar";

const Dues = () => {
  // const { workouts, isPending, error } = useFetch("/api/workouts");
  var today = new Date(),
    date = today.toTimeString();

  const [college, setCollege] = useState({
    college: "Lissah College",
    place: "Kaithapoyil",
    teachersCount: 57,
    StudentsCount: 650,
    staffCount: 8,
  });

  return (
    <div className="Dueshome">
      <VerticalNavbar />
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Dues</h1>
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

export default Dues;
