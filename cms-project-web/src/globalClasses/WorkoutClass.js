import React from "react";
import useFetch from "../Hook/useFetch";
import WorkoutDetails from "../globalClasses/WorkoutDetails";
import WorkoutForm from "../globalClasses/WorkoutForm";
import { WorkoutsContextProvider } from "../context/WorkoutsContext";

const WorkoutClass = () => {
  const { data, isPending, error } = useFetch("/api/workouts");

  return (
    <WorkoutsContextProvider>
      <div className="Dashboardhome">
        <div className="dashsubLeft">
          {error && <div>{error}</div>}
          {isPending && <div className="loading">Loading....</div>}
          {data &&
            data.map((workouts) => (
              <WorkoutDetails key={workouts._id} workout={workouts} />
            ))}
        </div>
        <WorkoutForm />
      </div>
    </WorkoutsContextProvider>
  );
};

export default WorkoutClass;
