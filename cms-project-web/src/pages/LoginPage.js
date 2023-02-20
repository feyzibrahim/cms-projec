import React from "react";
import firstimg from "../img/400.png";
import Footer from "../globalClasses/Footer";
import { useState } from "react";
import { useLogin } from "../Hook/useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleClick = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="LoginHome">
      <div className="text">
        <div className="pic">
          <img src={firstimg} alt="something" />
        </div>
        <form className="bbb" onSubmit={handleClick}>
          <h1>Welcome Back! Sir/Madam</h1>
          <p>
            <button className="nocolor">Login with Google</button>
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
              Login
            </button>
          </p>
          {error && <div className="error">{error}</div>}
          <p className="havean">Don't have an account?sign up Now</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
