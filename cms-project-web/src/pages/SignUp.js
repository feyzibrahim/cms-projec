import React from "react";
import firstimg from "../img/400.png";

const SignUp = () => {
  return (
    <div className="one">
      <div className="some">
        <img src={firstimg} alt="something" />
      </div>
      <div className="two">
        <h1>create an account</h1>
        <p>please enter your details below to signup to e-campus</p>
        <p>
          <input type="text" placeholder="Name"></input>
        </p>
        <p>
          <input type="text" placeholder="Email"></input>
        </p>
        <p>
          <input type="password" placeholder="Password"></input>
        </p>
        <p>
          <input type="password" placeholder="passwordAgain"></input>
        </p>
        <p>
          <button className="three">Signup</button>
        </p>
        <p>or</p>
        <p>
          <button className="four">sign up with Google</button>
        </p>
        <p className="five">Already have an account?Log in Now</p>
      </div>
    </div>
  );
};

export default SignUp;
