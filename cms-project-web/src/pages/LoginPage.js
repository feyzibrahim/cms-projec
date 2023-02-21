import React from "react";
import firstimg from "../img/400.png";
import Footer from "../globalClasses/Footer";
import { useState } from "react";
import { useLogin } from "../Hook/useLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleClick = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="content">
      <div className="LoginHome">
        <div className="text">
          <div className="pic">
            <img src={firstimg} alt="something" />
          </div>
          <form className="bbb" onSubmit={handleClick}>
            <h1>Welcome Back! Sir/Madam</h1>
            <p className="enterYourDetails">
              {/* <button className="borderColoredButton">Login with Google</button> */}
              Please Enter your details...
            </p>
            <p>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              ></input>
            </p>
            <p>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              ></input>
            </p>
            <p>
              <button disabled={isLoading} className="fullColeredButton">
                {isLoading ? "Loading" : "Login"}
              </button>
            </p>
            {error && <div className="error">{error}</div>}
            <p className="havean">
              Don't have an account? <Link to="/signup"> sign up Now </Link>
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
