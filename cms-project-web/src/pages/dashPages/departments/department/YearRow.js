import React from "react";

const YearRow = (props) => {
  return (
    <div className="depTeacherRow">
      <p>Year {props.i}</p>
      <div>
        <p>First Sem</p>
        <p>Second Sem</p>
      </div>
    </div>
  );
};

export default YearRow;
