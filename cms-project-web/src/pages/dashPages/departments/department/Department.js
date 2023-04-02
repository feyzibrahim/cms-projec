import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../../../Hook/contextHooks/useAuthContext";

const Department = () => {
  const { state } = useLocation();
  const { department } = state;
  const { user } = useAuthContext();
  const [teachers, setTeachers] = useState();

  const listYear = [];
  for (let i = 1; i <= department.year_count; i++) {
    listYear.push(
      <div className="depTeacherRow">
        <p>Year {i}</p>
      </div>
    );
  }

  const loadTeachers = async () => {
    const response = await fetch("/api/teacher", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      setTeachers(json);
    }
    if (!response.ok) {
      console.log(json.error);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <div className="addSomeMargin">
      <div className="depHeader">
        <h1>{department.department_name} </h1>
        <h3>HOD - {department.hod}</h3>
        <h3>
          Created on :
          {formatDistanceToNow(new Date(department.createdAt), {
            addSuffix: true,
          })}
        </h3>
      </div>
      <div className="depBottom">
        <div className="depTeachers">
          <h2>Teachers</h2>
          {teachers != null && teachers.length > 0 ? (
            <div>
              {teachers.map((t) => {
                if (t.department === department.department_name) {
                  return (
                    <div className="depTeacherRow">
                      <p>{t.teacherName}</p>
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            "Empty"
          )}
        </div>
        <div className="depSubjects">
          <h2>Year</h2>
          {listYear}
        </div>
      </div>
    </div>
  );
};

export default Department;
