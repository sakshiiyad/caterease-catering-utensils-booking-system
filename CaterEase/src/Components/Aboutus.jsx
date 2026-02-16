import React from "react";
import "./Aboutus.css";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate=useNavigate();
  return (
    <div className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About CaterEase</h1>
          <p className="about-subtitle">
            Making event catering simple, transparent, and stress-free.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-container">
        
        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <span className="section-label">Our Story</span>
            <h2>From Family Business to Digital Solution</h2>
            <p>
              This platform was born from real frustration. After years of running a family catering business 
              and handling endless phone calls, unclear pricing, and last-minute chaos, we knew there had to 
              be a better way.
            </p>
            <p>
              We built CaterEase to solve the problems we experienced firsthand giving customers clarity 
              and giving vendors peace of mind.
            </p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              {/* Add an image here */}
              <img src="https://plus.unsplash.com/premium_photo-1723867267202-169dfe3b197a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <span>🍽️</span>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <span className="section-label">What Drives Us</span>
          <h2>Built on Trust & Simplicity</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Speed</h3>
              <p>Book your entire event in minutes, not days</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Transparency</h3>
              <p>Clear pricing, no hidden fees, ever</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Reliability</h3>
              <p>Your event matters — we never let you down</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Care</h3>
              <p>Personal attention for every single booking</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-section">
          <span className="section-label">How It Works</span>
          <h2>Three Simple Steps</h2>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse & Compare</h3>
              <p>View packages with transparent pricing and guided utensil suggestions</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Customize</h3>
              <p>Adjust guest count, select add-ons, and see pricing update in real-time</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Confirm & Relax</h3>
              <p>Instant booking confirmation and order tracking from start to finish</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Events Catered</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Menu Options</div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Plan Your Event?</h2>
          <p>Join hundreds of satisfied customers who trust CaterEase</p>
          <button className="cta-btn" 
          onClick={()=>navigate("/services")}
          >Start Booking Now</button>
        </section>

      </div>
    </div>
  );
};

export default Aboutus;