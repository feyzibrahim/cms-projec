import React, { useState } from "react";
import { useManagementContext } from "../../../Hook/contextHooks/useManagementContext";
import { useAuthContext } from "../../../Hook/contextHooks/useAuthContext";

const ManagementProfile = (props) => {
  const management = props.management;
  const [canBeEdited, setCanBeEdited] = useState(true);

  const { user } = useAuthContext();
  const { dispatch } = useManagementContext();
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
      const response = await fetch("/api/management/" + management._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_MANAGEMENT", payload: json });
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
                defaultValue={management.managerName}
                disabled={canBeEdited}
              />
              <label>Email</label>
              <input
                type="email"
                defaultValue={management.email}
                disabled={canBeEdited}
              />
              <label>Password</label>
              <input
                type="password"
                defaultValue={management.password}
                disabled={canBeEdited}
              />
              <label>Registration Number</label>
              <input
                type="number"
                defaultValue={management.registrationNumber}
                disabled={canBeEdited}
              />
              <label>Gendar</label>
              <input
                type="text"
                defaultValue={management.gender}
                disabled={canBeEdited}
              />
            </div>
            <div>
              <label>Roll</label>
              <input
                type="text"
                defaultValue={management.roll}
                disabled={canBeEdited}
              />
              <label>Mobile Number</label>
              <input
                type="number"
                defaultValue={management.mobileNumber}
                disabled={canBeEdited}
              />
              <label>Date of Birth</label>
              <input
                type="date"
                defaultValue={getDatefrom(management.dob)}
                disabled={canBeEdited}
              />
              <label>Joining Date</label>
              <input
                type="date"
                defaultValue={getDatefrom(management.joiningDate)}
                disabled={canBeEdited}
              />
              <label>Salary</label>
              <input
                type="text"
                defaultValue={management.salary}
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
            {!isPending ? "Delete Member" : "Loading"}
          </button>
          {error && "Something went wrong"}
        </div>
      </div>
    </div>
  );
};

export default ManagementProfile;
