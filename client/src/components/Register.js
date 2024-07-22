import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Register({
  isLoginFormActive,
  isRegisterFormActive,
  closeForms,
  openLoginForm,
  openRegisterForm,
}) {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [auth, setAuth] = useAuth();

  const handleRegisterFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
      role: formData.get("role"),
      address: formData.get("address"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        data
      );
      if (response.data.success) {
        toast.success(response.data.message);
        closeForms(); // Close the form pop-up
        openLoginForm(); // Open the login form
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Email not registered. Please register first.");
      console.error("Error registering user", error);
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        data
      );
      if (response.data.success) {
        toast.success(response.data.message);
        closeForms();
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        // navigate("/Navbar"); // Redirect to the home page after successful login
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in user", error);
    }
  };

  return (
    <div
      className={`wrapper ${
        isLoginFormActive || isRegisterFormActive ? "active" : ""
      }`}
    >
      <div className="form-box-container">
        {/* Login Form */}
        <div className={`form-box login ${isLoginFormActive ? "active" : ""}`}>
          <span className="icon-close" onClick={closeForms}>
            <i className="material-icons">close</i>
          </span>
          <h2>Login</h2>
          <form onSubmit={handleLoginFormSubmit}>
            <div className="input-box">
              <span className="icon">
                <i className="material-icons">mail</i>
              </span>
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="material-icons">lock</i>
              </span>
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            {/* <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div> */}
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <span className="register-link" onClick={openRegisterForm}>
                  Register
                </span>
              </p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div
          className={`form-box register ${
            isRegisterFormActive ? "active" : ""
          }`}
        >
          <span className="icon-close" onClick={closeForms}>
            <i className="material-icons">close</i>
          </span>
          <h2>Registration</h2>
          <form onSubmit={handleRegisterFormSubmit}>
            <div className="input-box">
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
              <input type="text" name="name" required />
              <label>Username/Organization Name</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="material-icons">mail</i>
              </span>
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="material-icons">lock</i>
              </span>
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="material-icons">phone</i>
              </span>
              <input type="text" name="phone" required />
              <label>Phone no.</label>
            </div>
            <div className="input-box">
              <select className="form-control" name="role" required>
                <option value="" disabled selected>
                  Role
                </option>
                <option value="0">Donor</option>
                <option value="1">NGO/Food Bank</option>
              </select>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fa fa-home"></i>
              </span>
              <input
                type="text"
                name="address"
                className="form-control"
                required
              />
              <label>Address</label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?{" "}
                <span className="login-link" onClick={openLoginForm}>
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
