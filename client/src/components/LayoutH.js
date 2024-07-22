import React, { useState } from "react";
import LoginRegister from "./Register"; // Assuming this is where your login and register forms are imported from
import { useAuth } from "../context/auth";
import { toast } from "react-hot-toast";

const LayoutH = () => {
  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            <b>UTKARSHAHAR</b>
          </a>
        </div>
      </div>
    </>
  );
};

export default LayoutH;
