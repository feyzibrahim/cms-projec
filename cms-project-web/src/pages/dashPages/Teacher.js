import React, { useState, useEffect } from "react";
import img from "../../img/noCollegeData.png";
import Loader from "../../globalClasses/Loader";
import MeetingForm from "../componants/MeetingForm";
import { useAuthContext } from "../../Hook/contextHooks/useAuthContext";
import { useTeacherContext } from "../../Hook/contextHooks/useTeacherContext";

const Teacher = () => {
  var today = new Date(),
    date = today.toTimeString();

  const { user } = useAuthContext();
  const { teacher, dispatch } = useTeacherContext();
  const [isPending, setIsPending] = useState(true);
  const [isNotForm, setIsNotForm] = useState(true);

  useEffect(() => {
    const abortConst = new AbortController();
    const fetchData = async () => {
      const response = await fetch("/api/teacher", {
        signal: abortConst.signal,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TEACHER", payload: json });
        console.log(json);
        setIsPending(false);
      }
      if (!response.ok) {
        console.log(json.error);
      }
    };

    fetchData();
    return () => abortConst.abort();
  }, []);

  return (
    <div className="Meatingshome addSomeMargin">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Teachers</h1>
            <p>{date}</p>
          </div>
          <div className="depHomeNavRight">
            <button
              className="fullColeredButton"
              onClick={() => {
                const isForm = !isNotForm;
                setIsNotForm(isForm);
              }}
            >
              {isNotForm ? "Add New Teacher" : "Go back"}
            </button>
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </div>
        <div className="meetingsContainer">
          {isPending && <Loader />}

          {isNotForm ? (
            teacher != null && teacher.length > 0 ? (
              <div>
                {/* <div className="meetingRows">
                  <div>
                    <p>Meeting Name</p>
                  </div>
                  <div>
                    <p>Organized By</p>
                  </div>
                  <div>
                    <p>Location</p>
                  </div>
                  <div>
                    <p>Time and Date</p>
                  </div>
                  <div>
                    <p>Status</p>
                  </div>
                  <div>
                    <p>Update</p>
                  </div>
                </div> */}
                {teacher.map((teach) => (
                  <p>{teach.name}</p>
                ))}
              </div>
            ) : (
              <div className="collegeDataNotFound">
                <div className="collegeDataNotFoundContainer">
                  <img src={img} alt="No data found" />
                  <h2>Teachers are not Added</h2>
                  <h5>
                    Please Click below button and fill up the form in order to
                    add a teacher.
                  </h5>
                  <button
                    className="fullColeredButton"
                    onClick={() => setIsNotForm(false)}
                  >
                    Click Here
                  </button>
                </div>
              </div>
            )
          ) : (
            <MeetingForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
