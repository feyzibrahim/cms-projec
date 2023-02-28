import React from "react";

const Settings = () => {
  var today = new Date(),
    date = today.toTimeString();

  return (
    <div className="Settingshome addSomeMargin">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Settings</h1>
            <p>{date}</p>
          </div>
          <div className="dHomeNavRight">
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
