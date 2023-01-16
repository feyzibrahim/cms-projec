import React from "react";
import firstimg from "../img/girl1.jpeg";
import secondimg from "../img/boy1.jpeg";
import thirdimg from "../img/girl2.jpeg";
const AboutPage = () => {
  return (
    <div className="main">
      <div className="sub">
        <h1>Meet our team of creators</h1>
        <p>Alone we can do so little:together we can do much</p>
      </div>

      <div className="image">
        <div className="much">
          <img src={firstimg} alt="some"></img>
          <p>Sam Jhon</p>
        </div>

        <div className="more">
          <img src={secondimg} alt="thing"></img>
          <p>Luther kson</p>
        </div>

        <div className="move">
          <img src={thirdimg} alt="damn"></img>
          <p>Kernal mson</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
