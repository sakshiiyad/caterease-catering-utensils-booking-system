import React from "react";
import "./Contact.css";
import ContactForm from "./Contactform";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Header Section */}
      <div className="contact-header">
        <span className="contact-label">Get In Touch</span>
        <h1>Contact Us</h1>
        <p>
          Have questions about catering, utensils, or bookings?
          We're here to help — reach out anytime.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="contact-container">
        <div className="contact-grid">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="quick-contact-section">
        <h2>Or Reach Us Directly</h2>
        <div className="quick-contact-grid">
          <a href="tel:+1234567890" className="quick-contact-card">
            <div className="quick-icon"><i class="fa-solid fa-phone"></i></div>
            <h3>Call Us</h3>
            <p>+91 (123) 456-7890</p>
            <span className="quick-link">Tap to call →</span>
          </a>

          <a href="mailto:info@caterease.com" className="quick-contact-card">
            <div className="quick-icon"><i class="fa-solid fa-envelope"></i></div>
            <h3>Email Us</h3>
            <p>info@caterease.com</p>
            <span className="quick-link">Send email →</span>
          </a>

          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="quick-contact-card">
            <div className="quick-icon"><i class="fa-brands fa-whatsapp"></i></div>
            <h3>WhatsApp</h3>
            <p>Chat with us instantly</p>
            <span className="quick-link">Start chat →</span>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-preview">
        <h2>Common Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How far in advance should I book?</h3>
            <p>We recommend booking at least 7-10 days in advance for best availability.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer custom packages?</h3>
            <p>Yes! We can customize any package to fit your specific needs and budget.</p>
          </div>
          <div className="faq-item">
            <h3>What's your cancellation policy?</h3>
            <p>Free cancellation up to 48 hours before your event date.</p>
          </div>
          <div className="faq-item">
            <h3>Do you provide delivery?</h3>
            <p>Yes, we offer delivery and pickup options for both catering and utensils.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;