import React, { useState } from "react";
import { useStaffContext } from "../../../Hook/contextHooks/useStaffContext";
import { useAuthContext } from "../../../Hook/contextHooks/useAuthContext";

const StaffProfile = (props) => {
  const staff = props.staff;
  const [canBeEdited, setCanBeEdited] = useState(true);

  const { user } = useAuthContext();
  const { dispatch } = useStaffContext();
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
      const response = await fetch("/api/staff/" + staff._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_STAFF", payload: json });
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
    <div className="fullScreenDiv">
      <div className="teacherProfileContainer">
        <div className="tpNav">
          <span
            className="material-symbols-outlined"
            onClick={props.showProfileOnClick}
          >
            Close
          </span>
        </div>
        <div className="tpProfileSession">
          <form>
            <div>
              <label>Name</label>
              <input
                type="text"
                defaultValue={staff.staffName}
                disabled={canBeEdited}
              />
              <label>Email</label>
              <input
                type="email"
                defaultValue={staff.email}
                disabled={canBeEdited}
              />
              <label>Password</label>
              <input
                type="password"
                defaultValue={staff.password}
                disabled={canBeEdited}
              />
              <label>Registration Number</label>
              <input
                type="number"
                defaultValue={staff.registrationNumber}
                disabled={canBeEdited}
              />
              <label>Gendar</label>
              <input
                type="text"
                defaultValue={staff.gender}
                disabled={canBeEdited}
              />
            </div>
            <div>
              <label>Duty</label>
              <input
                type="text"
                defaultValue={staff.duty}
                disabled={canBeEdited}
              />
              <label>Mobile Number</label>
              <input
                type="number"
                defaultValue={staff.mobileNumber}
                disabled={canBeEdited}
              />
              <label>Date of Birth</label>
              <input
                type="date"
                defaultValue={getDatefrom(staff.dob)}
                disabled={canBeEdited}
              />
              <label>Joining Date</label>
              <input
                type="date"
                defaultValue={getDatefrom(staff.joiningDate)}
                disabled={canBeEdited}
              />
              <label>Salary</label>
              <input
                type="text"
                defaultValue={staff.salary}
                disabled={canBeEdited}
              />
            </div>
          </form>
          <button
            className="fullColeredButton"
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
          >
            {!isPending ? "Delete Staff" : "Loading"}
          </button>
          {error && "Something went wrong"}
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
