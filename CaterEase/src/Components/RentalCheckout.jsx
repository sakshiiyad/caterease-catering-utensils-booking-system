import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RentalCheckout.css";

const RentalCheckout = () => {
  const [form, setform] = useState({
    eventDate: "",
    duration: 1,
    address: "",
    name: "",
    phone: "",
    delivery: "pickup",
    notes: "",
  });
  const [loading, setloading] = useState(false)

  const { state } = useLocation();
  const cart = state?.cart || [];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: name === "duration" ? Number(value) : value,
    });
  };

  const handleConfirm = () => {
    if (cart.length === 0) {
      alert("Cart is empty. Please add items first.");
      navigate("/rent/cart");
      return;
    }

    if (!form.eventDate || !form.address || !form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }
    setloading(true)

    // Fake Booking ID
    
    setTimeout(()=>{
      const bookingId = "RENT" + Math.floor(Math.random() * 10000);
      setloading(false);
      navigate("/checkout/success", {
      state: {
        bookingId,
        form,
        cart,
      },
    });
  

    },1500);
  }
  // total price (if you have price in item)
  const cartTotal = cart.reduce((sum, item) => {
    const qty = item.qty || item.quantity || 1;
    return sum + qty * (item.price || 0);
  }, 0);


  return (
    <div className="checkout-page">
      <h2 className="title">Booking Details</h2>

      <div className="checkout-grid">
        {/* LEFT: FORM */}
        <div className="form-card">
          <h3 className="section-title">Event + Contact Info</h3>

          <label className="label">
            Event Date <span>*</span>
          </label>
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
          />

          <label className="label">
            Rental Duration (days) <span>*</span>
          </label>
          <input
            type="number"
            min="1"
            name="duration"
            value={form.duration}
            onChange={handleChange}
          />

          <label className="label">
            Event Address <span>*</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter full address"
            value={form.address}
            onChange={handleChange}
          />

          <label className="label">
            Name <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />

          <label className="label">
            Phone <span>*</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label className="label">Delivery Option</label>
          <select name="delivery" value={form.delivery} onChange={handleChange}>
            <option value="pickup">Self Pickup</option>
            <option value="delivery">Home Delivery</option>
          </select>

          <label className="label">Notes</label>
          <textarea
            name="notes"
            placeholder="Any special instructions?"
            value={form.notes}
            onChange={handleChange}
          />

          <button
  className="confirm-btn"
  onClick={handleConfirm}
  disabled={loading}
>
  {loading ? (
    <span className="btn-loading">
      <span className="spinner"></span>
      Booking...
    </span>
  ) : (
    "Confirm Rental Booking"
  )}
</button>

        </div>

        {/* RIGHT: SUMMARY */}
        <div className="summary-card">
          <h3 className="section-title">Order Summary</h3>

          {cart.length === 0 ? (
            <p className="empty">No items in cart.</p>
          ) : (
            cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div>
                  <p className="item-name">{item.name}</p>
                  <p className="item-sub">
                    Qty: {item.qty || item.quantity || 1}
                  </p>
                </div>
                <p className="item-price">₹{item.price || 0}</p>
              </div>
            ))
          )}

          <div className="divider"></div>

          <div className="total-row">
            <p>Total</p>
            <p className="total-price">₹{cartTotal}</p>
          </div>

          <p className="note">
            ✅ Booking status will be <b>Pending</b> until confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentalCheckout;
