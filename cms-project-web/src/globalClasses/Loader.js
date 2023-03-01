import React from "react";

const Loader = () => {
  return (
    <div className="lds">
      <div className="lds-container">
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
