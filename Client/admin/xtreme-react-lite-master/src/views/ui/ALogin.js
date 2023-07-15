import React from "react";
import "./Login.css";
import LoginForm from "./ALoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <LoginForm />
      </div>
      <div className="image-container">
        {/* Add your image here */}
        <img src="https://media.istockphoto.com/id/923041230/photo/african-businesswoman-analyzing-project-statistics-on-laptop-screen-close-up.webp?b=1&s=170667a&w=0&k=20&c=2wUIhncZ_qRCE_QNEVX1Ldzk8bs70FRsRPEKND3dIeY=" alt="Background" />
      </div>
    </div>
  );
};

export default Login;