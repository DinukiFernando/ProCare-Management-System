import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <LoginForm />
      </div>
      <div className="image-container">
        {/* Add your image here */}
        <img src="https://www.onlineshs.com/wp-content/uploads/2022/12/shutterstock_1901822248-1-1.png" alt="Background" />
      </div>
    </div>
  );
};

export default Login;