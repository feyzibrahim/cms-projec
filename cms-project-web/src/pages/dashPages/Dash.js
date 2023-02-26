import React from "react";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../Hook/useAuthContext";
import { Link } from "react-router-dom";

const Dash = () => {
  var today = new Date(),
    date = today.toTimeString();

  const { user } = useAuthContext();
  const [college, setCollege] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/college", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setCollege(json);
        console.log(json);
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashHomee">
      <div className="dHomeNav">
        <div className="dHomeNavLeft">
          <h1>Dashboard</h1>
          <p>{date}</p>
        </div>
        <div className="dHomeNavRight">
          <h3>
            {college && college[0].college_name}, {college && college[0].place}
          </h3>
          <span className="material-symbols-outlined">notifications</span>
        </div>
      </div>

      {isPending && <div className="loading">Loading....</div>}
      {college && (
        <div className="dashCollegeDetail">
          <div className="dashCollegeDetailLeft">
            <div className="countList">
              <div className="teacherCount countListCounter">
                <h1>{college[0].teachers_count}</h1>
                <h6>Teacher</h6>
              </div>
              <div className="studentCount countListCounter">
                <h1>{college[0].students_count}</h1>
                <h6>Students</h6>
              </div>
              <div className="staffCount countListCounter">
                <h1>{college[0].staff_count}</h1>
                <h6>Non-Teaching Staff</h6>
              </div>
            </div>

            <div className="dashTodos">
              <div className="dashTodosNav">
                <h3>Todos</h3>
                <Link to="/">View All</Link>
              </div>
              <p>{">"} Todos are empty</p>
            </div>
          </div>
          <div className="dashCollegeDetailRight">
            <h3>Announcements</h3>
            <p>{">"} No New Announcements</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dash;
