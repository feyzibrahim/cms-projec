import React from "react";
// import { useAuthContext } from "../../Hook/contextHooks/useAuthContext";
// import { useMeetingContext } from "../../Hook/contextHooks/useMeetingContext";

const TeacherRows = ({ teacher }) => {
  // const { user } = useAuthContext();
  // const { dispatch } = useMeetingContext();

  // const handleUpdate = async () => {
  //   const isOver = true;

  //   if (!user) {
  //     return;
  //   }

  //   const teacherhere = {
  //     isOver,
  //   };

  //   const response = await fetch("/api/teachers/" + teacher._id, {
  //     method: "PATCH",
  //     body: JSON.stringify(teacherhere),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   });

  //   const json = await response.json();
  //   if (response.ok) {
  //     dispatch({ type: "UPDATE_MEETING", payload: json });
  //     console.log("Data updated" + json);
  //   }

  //   if (!response.ok) {
  //     console.log(response.error);
  //   }
  // };

  // const handleDelete = async () => {
  //   if (!user) {
  //     return;
  //   }

  //   const response = await fetch("/api/teachers/" + teacher._id, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   });

  //   const json = await response.json();
  //   if (response.ok) {
  //     dispatch({ type: "DELETE_MEETING", payload: json });
  //     console.log("Data updated" + json);
  //   }

  //   if (!response.ok) {
  //     console.log(response.error);
  //   }
  // };

  return (
    <div
      className="teacherRows"
      onClick={() => {
        console.log(teacher.teacherName);
      }}
    >
      <div>
        <p>{teacher.teacherName}</p>
      </div>
      <div>
        <p>{teacher.email}</p>
      </div>
      <div>
        <p>{teacher.gender}</p>
      </div>
      <div>
        <p>{teacher.department}</p>
      </div>
      <div>
        <p>{teacher.designation}</p>
      </div>
      <div>
        <p>{teacher.facultyMobileNumber}</p>
      </div>
    </div>
  );
};

export default TeacherRows;
