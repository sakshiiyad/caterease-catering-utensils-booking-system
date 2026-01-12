import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-box">
        <h2 className="title">
          Book Catering & Utensils for Your Events — Fast and Hassle-Free
        </h2>

        <p className="subtitle">
          Compare packages, get guided utensil suggestions, and confirm bookings instantly.
        </p>

        <button className="primary-btn">
          Start Booking
        </button>
      </div>
    </div>
  );
};

export default Home;
