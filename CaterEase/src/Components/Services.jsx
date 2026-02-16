import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-wrapper">

      {/* PAGE HEADER */}
      <div className="services-header">
        <span className="services-label">What We Offer</span>
        <h1>Services We Provide</h1>
        <p className="services-subtext">
          Whether you need complete catering support or utensils on rent,
          we've got you covered simple, transparent, and reliable.
        </p>
      </div>

      {/* MAIN SERVICES GRID */}
      <div className="services-grid">

        {/* CARD 1 - CATERING */}
        <div className="service-card catering-card">
          <div className="service-card-header">
            <div className="service-icon">🍽️</div>
            <span className="service-badge">Most Popular</span>
          </div>
          
          <h2>Catering Packages with Utensil Support</h2>

          <p className="service-desc">
            Book catering and automatically get suggested utensils
            based on your package and guest count. Customize only if needed.
          </p>

          <div className="service-features">
            <div className="feature-item">
              <span className="feature-icon">🍽</span>
              <span>Ready-made food packages</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🥄</span>
              <span>Recommended utensils auto-filled</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Transparent pricing</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📅</span>
              <span>Quick online booking</span>
            </div>
          </div>

          <button
            className="service-btn secondary-btn "
            onClick={() => navigate("/packages", {
              state: { bookingType: "catering" }
            })}
          >
            View Catering Packages 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* CARD 2 - UTENSILS */}
        <div className="service-card utensils-card">
          <div className="service-card-header">
            <div className="service-icon">🥄</div>
          </div>
          
          <h2>Utensils on Rent</h2>

          <p className="service-desc">
            Just need utensils? Rent high-quality vessels, plates, spoons,
            and more without booking catering.
          </p>

          <div className="service-features">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Flexible quantities</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💵</span>
              <span>Affordable per-day pricing</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧼</span>
              <span>Clean & maintained inventory</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <span>Pickup / delivery options</span>
            </div>
          </div>

          <button
            className="service-btn secondary-btn"
            onClick={() => navigate("/rent", {
              state: { bookingType: "utensils" }
            })}
          >
            Rent Utensils
           
          </button>
        </div>

      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="why-choose-section">
        <h2>Why Choose CaterEase?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Instant Booking</h3>
            <p>Confirm your order in minutes, not days</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💎</div>
            <h3>No Hidden Costs</h3>
            <p>What you see is what you pay</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Smart Suggestions</h3>
            <p>We recommend exactly what you need</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Reliable Service</h3>
            <p>500+ successful events and counting</p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="services-cta">
        <h2>Not Sure What You Need?</h2>
        <p>Our team is here to help you choose the perfect package</p>
        <button className="contact-btn" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Services;