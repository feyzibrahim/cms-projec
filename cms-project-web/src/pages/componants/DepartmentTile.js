import React from "react";

const DepartmentTile = ({ department }) => {
  return (
    <div className="departmentTile">
      <h2>{department.department_name}</h2>
      <p>Years: {department.year_count}</p>
      <p>HOD: {department.hod}</p>
      <p>Teachers: {department.teacher_count}</p>
      <p>Students: {department.students_count}</p>
    </div>
  );
};

export default DepartmentTile;
