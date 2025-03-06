import React from "react";
import "./LoginRegister.css";
const LoginRegister = () => {
  return (
    <div className="Logincontainer">
      <h2>Login/Register Page</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <br />
        <button type="submit">Login</button>
        <button type="button">Register</button>
      </form>
    </div>
  );
};

export default LoginRegister;
