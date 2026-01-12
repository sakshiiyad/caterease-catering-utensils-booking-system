import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="success-container">
      <h2>Booking Placed Successfully</h2>
      <p>
        Booking ID: <b>{state?.bookingId}</b>
      </p>
      <p>Status: Pending approval</p>

      <button className="home-btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default Success;
