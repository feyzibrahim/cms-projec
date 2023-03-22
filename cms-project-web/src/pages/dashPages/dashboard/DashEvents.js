import React, { useState, useEffect } from "react";
import DashEventForm from "./DashEventForm";
import { useAuthContext } from "../../../Hook/contextHooks/useAuthContext";
import Loader from "../../../globalClasses/Loader";
import { useEventContext } from "../../../Hook/contextHooks/useEventContext";

const DashEvents = () => {
  const [showDashCreateForm, setShowDashCreateForm] = useState(false);

  const showDashCreateFormOnClick = () => {
    setShowDashCreateForm(!showDashCreateForm);
  };

  const { user } = useAuthContext();
  const { events, dispatch } = useEventContext();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/event", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EVENT", payload: json });
        setIsPending(false);
      }
      if (!response.ok) {
        console.log(json.error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashTodos">
      {isPending && <Loader />}
      {showDashCreateForm && (
        <DashEventForm showDashCreateFormOnClick={showDashCreateFormOnClick} />
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
      {events != null && events.length > 0 ? (
        events.map((e) => <p>{e.eventName}</p>)
      ) : (
        <p>{">"} Events are empty</p>
      )}
    </div>
  );
};

export default DashEvents;
