import React from "react";
import useFetch from "../Hook/useFetch";
import WorkoutDetails from "../globalClasses/WorkoutDetails";
import WorkoutForm from "../globalClasses/WorkoutForm";

const DashBoard = () => {
  const { workouts, isPending, error } = useFetch("/api/workouts");

  return (
    <div className="Dashboardhome">
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
  );
};

export default DashBoard;
