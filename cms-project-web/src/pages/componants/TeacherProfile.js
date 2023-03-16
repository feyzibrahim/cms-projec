import React, { useState } from "react";
import { useTeacherContext } from "../../Hook/contextHooks/useTeacherContext";
import { useAuthContext } from "../../Hook/contextHooks/useAuthContext";

const TeacherProfile = (props) => {
  const teacher = props.teacher;
  const [canBeEdited, setCanBeEdited] = useState(true);

  const { user } = useAuthContext();
  const { dispatch } = useTeacherContext();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const getDatefrom = (dd) => {
    var curr = new Date(dd);
    var date = curr.toISOString().substring(0, 10);
    return date;
  };

  const handleDelete = () => {
    const deleteData = async () => {
      setIsPending(true);
      const response = await fetch("/api/teacher/" + teacher._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_TEACHER", payload: json });
        setIsPending(false);
        setError(null);
        setCanBeEdited();
      }

      if (!response.ok) {
        setIsPending(false);
        setError(response.error);
      }
    };

    if (user) {
      deleteData();
    }
  };

  return (
    <div className="teacherProfile">
      <div className="teacherProfileContainer">
        <div className="tpNav">
          <span
            className="material-symbols-outlined"
            onClick={props.showProfileOnClick}
          >
            Close
          </span>
          <p>Teacher Profile</p>
        </div>
        <div className="tpProfileSession">
          <form>
            <div>
              <label>Name</label>
              <input
                type="text"
                defaultValue={teacher.teacherName}
                disabled={canBeEdited}
              />
              <label>Email</label>
              <input
                type="email"
                defaultValue={teacher.email}
                disabled={canBeEdited}
              />
              <label>Password</label>
              <input
                type="password"
                defaultValue={teacher.password}
                disabled={canBeEdited}
              />
              <label>Registration Number</label>
              <input
                type="number"
                defaultValue={teacher.registrationNumber}
                disabled={canBeEdited}
              />
              <label>Gendar</label>
              <input
                type="text"
                defaultValue={teacher.gender}
                disabled={canBeEdited}
              />
              <label>Designation</label>
              <input
                type="text"
                defaultValue={teacher.designation}
                disabled={canBeEdited}
              />
            </div>
            <div>
              <label>Department</label>
              <input
                type="text"
                defaultValue={teacher.department}
                disabled={canBeEdited}
              />
              <label>Mobile Number</label>
              <input
                type="number"
                defaultValue={teacher.facultyMobileNumber}
                disabled={canBeEdited}
              />
              <label>Date of Birth</label>
              <input
                type="date"
                defaultValue={getDatefrom(teacher.dob)}
                disabled={canBeEdited}
              />
              <label>Joining Date</label>
              <input
                type="date"
                defaultValue={getDatefrom(teacher.joiningDate)}
                disabled={canBeEdited}
              />
              <label>Subjects Can Teach</label>
              <input
                type="text"
                defaultValue={teacher.subjectsCanTeach}
                disabled={canBeEdited}
              />
              <label>Salary</label>
              <input
                type="text"
                defaultValue={teacher.salary}
                disabled={canBeEdited}
              />
            </div>
          </form>

          {/* <button
            className="fullColeredButton"
            onClick={(e) => {
              e.preventDefault();
              setCanBeEdited(!canBeEdited);
              if (!canBeEdited) {
                handleUpdate();
                console.log("Update Teacher");
              }
            }}
          >
            {canBeEdited ? "Edit The Profile" : "Update"}
          </button> */}
          <button
            className="fullColeredButton"
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
          >
            {!isPending ? "Delete Teacher" : "Loading"}
          </button>
          {error && "Something went wrong"}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
