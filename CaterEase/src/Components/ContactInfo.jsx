import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="info-card">
      <h2>Quick Contact</h2>

      <div className="info-item">
        <div className="info-icon"><i class="fa-solid fa-phone"></i></div>
        <div className="info-content">
          <strong>Phone</strong>
          <a href="tel:+919876543210">+91 9876 543 210</a>
          <small>Available 9am – 8pm</small>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon"><i class="fa-brands fa-whatsapp"></i></div>
        <div className="info-content">
          <strong>WhatsApp</strong>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            Chat with us instantly
          </a>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon"><i class="fa-solid fa-envelope"></i></div>
        <div className="info-content">
          <strong>Email</strong>
          <a href="mailto:support@caterease.com">support@caterease.com</a>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon"><i class="fa-solid fa-location-arrow"></i></div>
        <div className="info-content">
          <strong>Location</strong>
          <p>Bengaluru, Karnataka<br/>India</p>
        </div>
      </div>

    
    </div>
  );
};

export default ContactInfo;