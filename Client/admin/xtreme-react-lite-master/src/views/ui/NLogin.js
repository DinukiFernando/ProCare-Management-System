import React from "react";
import "./Login.css";
import LoginForm from "./NLoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <LoginForm />
      </div>
      <div className="image-container">
        {/* Add your image here */}
        <img src="https://media.nurse.org/cache/29/98/299888758a4f8e05992ac2cbf942215f.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default Login;