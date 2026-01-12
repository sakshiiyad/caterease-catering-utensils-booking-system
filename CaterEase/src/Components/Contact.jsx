import React from "react";
import "./Contact.css";
import ContactForm from "./Contactform";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions about catering, utensils, or bookings?
          We’re here to help.
        </p>
      </div>

      <div className="contact-grid">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
