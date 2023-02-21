import React from "react";
import useFetch from "../Hook/useFetch";
import WorkoutDetails from "../globalClasses/WorkoutDetails";
import WorkoutForm from "../globalClasses/WorkoutForm";

const Dash = () => {
  const { workouts, isPending, error } = useFetch("/api/workouts");

  return (
    <div className="content">
      <div className="Dashhome">
        <div className="dashsubLeft">
          {error && <div>{error}</div>}
          {isPending && <div className="loading">Loading....</div>}
          {workouts &&
            workouts.map((workouts) => (
              <WorkoutDetails key={workouts._id} workout={workouts} />
            ))}
        </div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Dash;
