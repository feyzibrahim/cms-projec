import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    const fetchWorkouts = async () => {
      const response = await fetch(url, { signal: abortConst.signal });
      const json = await response.json();
      if (response.ok) {
        setData(json);
        setIsPending(false);
        setError(null);
      } else {
        setIsPending(false);
      }
    };

    fetchWorkouts();

    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

// fetch(url, { signal: abortConst.signal })
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Could not fetch the data from Server");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//         setIsPending(false);
//         setError(null);
//       })
//       .catch((err) => {
//         if (err.name === "AbortError") {
//           console.log("ferch aborted");
//         } else {
//           setIsPending(false);
//           setError(err.message);
//         }
//       });
