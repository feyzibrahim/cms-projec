import { useState, useEffect } from "react";
import { useWorkoutsContext } from "./useWorkoutsContext";

const useFetch = (url) => {
  // const [data, setData] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    const fetchWorkouts = async () => {
      const response = await fetch(url, { signal: abortConst.signal });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
        setIsPending(false);
        setError(null);
      } else {
        setIsPending(false);
      }
    };

    fetchWorkouts();

    return () => abortConst.abort();
  }, [url, dispatch]);

  return { workouts, isPending, error };
};

export default useFetch;
