import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RentalCheckout.css";
import { getToken } from "../utils/auth";
import { toast } from "react-toastify";

const RentalCheckout = () => {
  const [form, setForm] = useState({
    eventDate: "",
    duration: 1,
    address: "",
    name: "",
    phone: "",
    delivery: "pickup",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const cart = state?.cart || [];
  const navigate = useNavigate();
  const token = getToken();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "duration" ? Number(value) : value });
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Cart is empty");
      navigate("/rent/cart");
      return;
    }

    if (!form.eventDate || !form.address || !form.name || !form.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          bookingType: "utensils",
          eventDate: form.eventDate,
          totalPrice:cartTotal,
          name: form.name,
          phone: form.phone,
          address: form.address,
          delivery: form.delivery,
          durationDays: form.duration,
          items: cart.map((item) => ({
            name: item.name,
            qty: item.qty || item.quantity || 1,
            pricePerDay: item.price,
          })),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error("Booking failed");
        return;
      }

      toast.success("Booking created successfully");
      navigate("/my-bookings");
    } catch {
      toast.error("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  const cartTotal = cart.reduce(
    (sum, item) =>
      sum + (item.qty || item.quantity || 1) * (item.price || 0),
    0
  );

  return (
    <div className="rental-checkout">
      <div className="rental-wrapper">
        <h2 className="rental-heading">Booking Details</h2>

        <div className="rental-layout">
          {/* LEFT : FORM */}
          <div className="rental-form-card">
            <h3 className="card-heading">Event & Contact</h3>

            <label className="form-label">Event Date *</label>
            <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} />

            <label className="form-label">Duration (days) *</label>
            <input type="number" min="1" name="duration" value={form.duration} onChange={handleChange} />

            <label className="form-label">Event Address *</label>
            <input type="text" name="address" placeholder="Full address" value={form.address} onChange={handleChange} />

            <label className="form-label">Name *</label>
            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />

            <label className="form-label">Phone *</label>
            <input type="text" name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />

            <label className="form-label">Delivery Mode</label>
            <select name="delivery" value={form.delivery} onChange={handleChange}>
              <option value="pickup">Self Pickup</option>
              <option value="delivery">Home Delivery</option>
            </select>

            <label className="form-label">Notes</label>
            <textarea
              name="notes"
              placeholder="Special instructions"
              value={form.notes}
              onChange={handleChange}
            />

            <button className="submit-booking-btn" onClick={handleConfirm} disabled={loading}>
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>

          {/* RIGHT : SUMMARY */}
          <div className="rental-summary-card">
            <h3 className="card-heading">Order Summary</h3>

            {cart.length === 0 ? (
              <p className="empty-cart">No items added.</p>
            ) : (
              cart.map((item) => (
                <div className="summary-row" key={item.id}>
                  <div>
                    <p className="summary-name">{item.name}</p>
                    <p className="summary-qty">Qty: {item.qty || item.quantity || 1}</p>
                  </div>
                  <p className="summary-price">₹{item.price}</p>
                </div>
              ))
            )}

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <span className="total-amount">₹{cartTotal}</span>
            </div>

            <p className="summary-note">
              ✔ Booking will remain <b>Pending</b> until approved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCheckout;
