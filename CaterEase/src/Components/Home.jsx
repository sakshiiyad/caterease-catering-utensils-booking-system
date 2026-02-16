import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="home">
      <div className="hero-box">
        <h2 className="title">
          Book Catering & Utensils for Your Events
        </h2>

        <p className="subtitle">
          
          Compare packages, get guided utensil suggestions, and confirm bookings instantly.
        </p>

        <button className="btn-custom"
        onClick={()=>navigate("/services")}
        >
          Start Booking
        </button>
      </div>
    </div>
  );
};

export default Home;
