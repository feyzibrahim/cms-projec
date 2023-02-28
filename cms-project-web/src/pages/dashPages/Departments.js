import React from "react";
import Loader from "../../globalClasses/Loader";

const Departments = () => {
  var today = new Date(),
    date = today.toTimeString();

  return (
    <div className="Classeshome addSomeMargin">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Departments</h1>
            <p>{date}</p>
          </div>
          <div className="dHomeNavRight">
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </div>
        <Loader />
      </div>
    </div>
  );
};

export default Departments;
