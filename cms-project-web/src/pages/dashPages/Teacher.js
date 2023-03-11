import React, { useState, useEffect } from "react";
import img from "../../img/noCollegeData.png";
import Loader from "../../globalClasses/Loader";
import TeacherForm from "../componants/TeacherForm";
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
                {teacher.map((t) => (
                  <p key={t._id}>{t.teacherName}</p>
                ))}
                <div>
                  {/* <MaterialTable
                    columns={[
                      { title: "Ad", field: "name" },
                      { title: "Soyad", field: "surname" },
                      {
                        title: "Doğum Yl",
                        field: "birthYear",
                        type: "numeric",
                      },
                      {
                        title: "Doğum Yeri",
                        field: "birthCity",
                        lookup: { 34: "İstanbul", 63: "Şanlurfa" },
                      },
                    ]}
                    data={[
                      {
                        name: "Mehmet",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 63,
                      },
                    ]}
                    title="Demo Title"
                  /> */}
                </div>
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
            <TeacherForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
