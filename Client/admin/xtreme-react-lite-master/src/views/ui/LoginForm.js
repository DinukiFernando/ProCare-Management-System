import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const history = useNavigate(); // Access the history object

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const formErrors = {};
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Send form data to the server
    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post("/api/login", formData);
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        setSuccessMessage("Login successful");
        setErrors({});
        
        // Redirect to /starter if email and password are the same
        if (email === password) {
          history.push("/starter");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error and display an appropriate message to the user
      setErrors({ serverError: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body px-4">
          <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="signup">
              Don't have an account? <br />
              <Link to="/doctor-form">Sign Up</Link>
            </div>
            {errors.serverError && (
              <div className="alert alert-danger">{errors.serverError}</div>
            )}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
