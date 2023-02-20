import React, { useState } from "react";
import firstimg from "../img/400.png";
import Footer from "../globalClasses/Footer";
import { useSignup } from "../Hook/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleClick = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="signupPage">
      <div className="one">
        <div className="some">
          <img src={firstimg} alt="something" />
        </div>
        <form className="signupForm" onSubmit={handleClick}>
          <h1>Create an account</h1>
          <p>Please enter your details below to signup to e-campus</p>
          <p>
            <input type="text" placeholder="Name"></input>
          </p>
          <p>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </p>
          <p>
            <input type="password" placeholder="passwordAgain"></input>
          </p>
          <p>
            <button className="three" disabled={isLoading}>
              Signup
            </button>
          </p>
          {error && <div className="error">{error}</div>}
          <p>or</p>
          <p>
            <button className="four">sign up with Google</button>
          </p>
          <p className="five">Already have an account?Log in Now</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
