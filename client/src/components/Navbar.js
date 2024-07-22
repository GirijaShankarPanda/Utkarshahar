import React, { useState } from "react";
import LoginRegister from "./Register"; // Assuming this is where your login and register forms are imported from
import { useAuth } from "../context/auth";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [isRegisterFormActive, setIsRegisterFormActive] = useState(false);
  const [auth, setAuth] = useAuth(); // Destructuring auth state and setter from useAuth hook

  const openLoginForm = () => {
    setIsLoginFormActive(true);
    setIsRegisterFormActive(false);
    closeSidebar();
  };

  const openRegisterForm = () => {
    setIsRegisterFormActive(true);
    setIsLoginFormActive(false);
    closeSidebar();
  };

  const closeForms = () => {
    setIsLoginFormActive(false);
    setIsRegisterFormActive(false);
  };

  const openSidebar = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  const handleLogout = () => {
    // Clear user session
    toast.success("Logout Successful");
    setAuth({ user: null, token: "" });
  };

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            <b>UTKARSHAHAR</b>
          </a>
          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">
              ABOUT
            </a>
            <a href="#team" className="w3-bar-item w3-button">
              <i className="fa fa-user"></i> TEAM
            </a>
            <a href="#work" className="w3-bar-item w3-button">
              <i className="fa fa-th"></i> WORK
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              <i className="fa fa-envelope"></i> CONTACT
            </a>
            {!auth.user ? (
              <>
                <a
                  href="#home"
                  className="w3-bar-item w3-button"
                  onClick={openLoginForm}
                >
                  <i className="fa fa-address-book"></i> LOGIN/SIGN UP
                </a>
              </>
            ) : (
              <>
                <a
                  href={`/dashboard/${
                    auth?.user?.role === 1 ? "admin" : "user"
                  }`}
                  className="w3-bar-item w3-button"
                >
                  <i className="fa fa-dashboard"></i> DASHBOARD
                </a>
                <a
                  href="#logout"
                  className="w3-bar-item w3-button"
                  onClick={handleLogout}
                >
                  <i className="fa fa-address-book"></i> LOGOUT
                </a>
              </>
            )}
          </div>
          <a
            href="javascript:void(0)"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={openSidebar}
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>

      <LoginRegister
        isLoginFormActive={isLoginFormActive}
        isRegisterFormActive={isRegisterFormActive}
        closeForms={closeForms}
        openLoginForm={openLoginForm}
        openRegisterForm={openRegisterForm}
      />

      {/* Sidebar for small screens */}
      <nav
        className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style={{ display: "none" }}
        id="mySidebar"
      >
        <a
          href="javascript:void(0)"
          onClick={closeSidebar}
          className="w3-bar-item w3-button w3-large w3-padding-16"
        >
          Close ×
        </a>
        <a
          href="#about"
          onClick={closeSidebar}
          className="w3-bar-item w3-button"
        >
          ABOUT
        </a>
        <a
          href="#team"
          onClick={closeSidebar}
          className="w3-bar-item w3-button"
        >
          TEAM
        </a>
        <a
          href="#work"
          onClick={closeSidebar}
          className="w3-bar-item w3-button"
        >
          WORK
        </a>
        <a
          href="#contact"
          onClick={closeSidebar}
          className="w3-bar-item w3-button"
        >
          CONTACT
        </a>
        {!auth.user ? (
          <>
            <a
              href="#login"
              onClick={openLoginForm}
              className="w3-bar-item w3-button"
            >
              LOGIN
            </a>
          </>
        ) : (
          <>
            <a
              href={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
              onClick={closeSidebar}
              className="w3-bar-item w3-button"
            >
              DASHBOARD
            </a>
            <a
              href="#logout"
              onClick={handleLogout}
              className="w3-bar-item w3-button"
            >
              LOGOUT
            </a>
          </>
        )}
      </nav>
    </>
  );
}
