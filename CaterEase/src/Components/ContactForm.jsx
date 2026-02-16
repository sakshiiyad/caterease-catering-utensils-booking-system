import React, { useState } from "react";
import "./ContactForm.css"; 

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General question",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.includes("@"))
      newErrors.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      newErrors.message = "Message should be at least 10 characters.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);

    // mock send — later you can connect backend
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "General question",
      message: ""
    });
  };

  return (
    <div className="contact-card">
      <h2>Send us a message</h2>

      {success && (
        <div className="success-box">
          Thanks! We’ll get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Your Name *"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          name="phone"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
        />

        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
        >
          <option>General question</option>
          <option>Booking support</option>
          <option>Utensil rental inquiry</option>
          <option>Payment issue</option>
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
