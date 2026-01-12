import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Us</h1>
      <p className="about-sub">
        Making event catering and utensil booking simple, transparent, and stress-free.
      </p>

      <section className="about-section">
        <h2>Why we built this</h2>
        <p>
          Planning events usually means dozens of phone calls, unclear pricing,
          last-minute confusion, and guessing which utensils are needed.
          We built this platform to put everything in one place —
          clear packages, guided utensil suggestions, and easy booking.
        </p>
      </section>

      <section className="about-section">
        <h2>What we do</h2>
        <p>
          We help families and event organizers book catering services
          and rent utensils online. Compare packages, customize based on
          guest count, and confirm bookings — all in a few clicks.
        </p>

        <ul className="list">
          <li>✔ Transparent pricing</li>
          <li>✔ Recommended utensils (no confusion)</li>
          <li>✔ Secure booking</li>
          <li>✔ Easy order tracking</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our story</h2>
        <p>
          This platform started from a small family catering business.
          After years of handling bookings manually, we realized customers
          needed a simpler, digital way to plan events — while vendors needed
          fewer mistakes and easier management. We decided to build a solution
          that works for both.
        </p>
      </section>

      <section className="about-grid">
        <div>
          <h3>How we help customers</h3>
          <ul className="list">
            <li>No more guessing utensils</li>
            <li>No awkward negotiations</li>
            <li>Instant booking confirmation</li>
            <li>Clear communication at every step</li>
          </ul>
        </div>

        <div>
          <h3>How we help admins/vendors</h3>
          <ul className="list">
            <li>Organized bookings</li>
            <li>Inventory tracking</li>
            <li>Reduced errors & double bookings</li>
            <li>Faster approvals & payments</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul className="list">
          <li><strong>Reliability</strong> – events should never fail because of planning issues</li>
          <li><strong>Transparency</strong> – no hidden costs</li>
          <li><strong>Convenience</strong> – book anytime, anywhere</li>
          <li><strong>Care</strong> – every event matters</li>
        </ul>
      </section>

      <div className="cta-box">
        <h2>Ready to plan your next event?</h2>
        <p>Explore our packages and start your booking today.</p>
        <button className="cta-btn">View Packages</button>
      </div>
    </div>
  );
};

export default Aboutus;
