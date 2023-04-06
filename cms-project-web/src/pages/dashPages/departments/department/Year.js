import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../../Hook/contextHooks/useAuthContext";

const Year = () => {
  const { state } = useLocation();
  const { i, department } = state;
  const [students, setStudents] = useState();
  const { user } = useAuthContext();

  const loadStudents = async () => {
    const response = await fetch("/api/student", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      setStudents(json);
    }
    if (!response.ok) {
      console.log(json.error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div>
      <h2>Year {i}</h2>
      <h3>{department.department_name}</h3>
      <div>
        {students &&
          students.map((item) => {
            return <p key={item._id}>{item.student_name}</p>;
          })}
      </div>
    </div>
  );
};

export default Year;
