import React from "react";
import useFetch from "../../Hook/useFetch";
import WorkoutDetails from "../componants/WorkoutDetails";
import WorkoutForm from "../componants/WorkoutForm";
import Loader from "../../globalClasses/Loader";

const Teachers = () => {
  var today = new Date(),
    date = today.toTimeString();

  const { workouts, isPending, error } = useFetch("/api/workouts");

  return (
    <div className="Teachershome addSomeMargin">
      <div className="dHomeNav">
        <div className="dHomeNavLeft">
          <h1>Teachers</h1>
          <p>{date}</p>
        </div>
        <div className="dHomeNavRight">
          <span className="material-symbols-outlined">notifications</span>
        </div>
      </div>
      <div className="Dashhome">
        <div className="dashsubLeft">
          {error && <div>{error}</div>}
          {isPending && <Loader />}
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

export default Teachers;
