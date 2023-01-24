import React from "react";
import useFetch from "../Hook/useFetch";
import WorkoutDetails from "../globalClasses/WorkoutDetails";

const DashBoard = () => {
  const { data, isPending, error } = useFetch("/api/workouts");

  return (
    <div className="Dashboardhome">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Loading....</div>}
      {data &&
        data.map((workouts) => (
          <WorkoutDetails key={workouts._id} workout={workouts} />
        ))}
    </div>
  );
};

export default DashBoard;
