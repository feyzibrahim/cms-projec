import React from "react";
import Loader from "../../globalClasses/Loader";

const Meatings = () => {
  var today = new Date(),
    date = today.toTimeString();

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
        <Loader />
      </div>
    </div>
  );
};

export default Meatings;
