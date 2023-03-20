import React, { useState } from "react";
import DashCreateForm from "./DashCreateForm";

const DashEvents = () => {
  const [showDashCreateForm, setShowDashCreateForm] = useState(false);

  const showDashCreateFormOnClick = () => {
    setShowDashCreateForm(!showDashCreateForm);
  };

  return (
    <div className="dashTodos">
      {showDashCreateForm && (
        <DashCreateForm showDashCreateFormOnClick={showDashCreateFormOnClick} />
      )}
      <div className="dashTodosNav">
        <h3>Events</h3>
        <button
          className="fullColeredButton"
          onClick={() => {
            showDashCreateFormOnClick();
          }}
        >
          Create New Event
        </button>
      </div>
      <p>{">"} Todos are empty</p>
    </div>
  );
};

export default DashEvents;
