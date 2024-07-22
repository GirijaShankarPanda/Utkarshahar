import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        s
        <h1 className="Text-center">
          Redirecting to you in {count} seconds ...
        </h1>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
