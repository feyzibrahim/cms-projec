import React from "react";
import firstimg from "../img/400.png";

const LoginPage = () => {
  return (
    <div className="text">
      <div className="pic">
        <img src={firstimg} alt="something" />
      </div>
      <div className="bbb">
        <h1>Welcome Back! Sir/Madam</h1>
        <p>
          <button className="nocolor">Login with Google</button>
        </p>
        <p>
          <input type="text" placeholder="Email"></input>
        </p>
        <p>
          <input type="password" placeholder="password"></input>
        </p>
        <p>
          <button className="fullColeredButton">Login</button>
        </p>
        <p className="havean">Don't have an account?sign up Now</p>
      </div>
    </div>
  );
};

export default LoginPage;
