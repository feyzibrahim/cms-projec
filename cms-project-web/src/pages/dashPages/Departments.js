import React, { useState, useEffect } from "react";
import Loader from "../../globalClasses/Loader";
import DepartmentTile from "../componants/DepartmentTile";
import { useAuthContext } from "../../Hook/useAuthContext";
import { Col, Row } from "antd";

const Departments = () => {
  var today = new Date(),
    date = today.toTimeString();

  const { user } = useAuthContext();
  const [department, setDepartment] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortConst = new AbortController();
    const fetchData = async () => {
      const response = await fetch("/api/department", {
        signal: abortConst.signal,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setDepartment(json);
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
    <div className="Classeshome addSomeMargin">
      <div className="dHome">
        <div className="dHomeNav">
          <div className="dHomeNavLeft">
            <h1>Departments</h1>
            <p>{date}</p>
          </div>
          <div className="dHomeNavRight">
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </div>
        {isPending && <Loader />}
        <Row gutter={[24, 32]} className="departmentRow">
          {department &&
            department.map((department) => {
              return (
                <Col lg={8} key={department._id}>
                  <DepartmentTile department={department} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default Departments;
