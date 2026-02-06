import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-wrapper">

      {/* PAGE HEADER */}
      <div className="services-header">
        <h1>Services We Provide</h1>

        <p className="services-subtext">
          Whether you need complete catering support or utensils on rent,
          we’ve got you covered — simple, transparent, and reliable.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="services-grid">

        {/* CARD 1 */}
        <div className="service-card main-card">
          <h2>Catering Packages with Utensil Support</h2>

          <p className="service-desc">
            Book catering and automatically get suggested utensils
            based on your package and guest count. Customize only if needed.
          </p>

          <ul className="service-list">
            <li>🍽 Ready-made food packages</li>
            <li>🥄 Recommended utensils auto-filled</li>
            <li>💰 Transparent pricing</li>
            <li>📅 Quick online booking</li>
          </ul>

          <button
            className="service-btn"
            onClick={() => navigate("/packages",{
              state:{bookingType:"catering"}
            })}
          >
            View Catering Packages →
          </button>
        </div>

        {/* CARD 2 */}
        <div className="service-card">
          <h2>Utensils on Rent</h2>

          <p className="service-desc">
            Just need utensils? Rent high-quality vessels, plates, spoons,
            and more — without booking catering.
          </p>

          <ul className="service-list">
            <li>✔ Flexible quantities</li>
            <li>✔ Affordable per-day pricing</li>
            <li>✔ Clean & maintained inventory</li>
            <li>✔ Simple pickup / delivery options</li>
          </ul>

          <button
            className="service-btn secondary"
            onClick={() => navigate("/rent",{
              state:{bookingType:"utensils"}
            })}
          >
            Rent Utensils →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
