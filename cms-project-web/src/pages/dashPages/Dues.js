import React from "react";
import Loader from "../../globalClasses/Loader";

const Dues = () => {
  var today = new Date(),
    date = today.toTimeString();

  return (
    <div className="Dueshome addSomeMargin">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Dues</h1>
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

export default Dues;
