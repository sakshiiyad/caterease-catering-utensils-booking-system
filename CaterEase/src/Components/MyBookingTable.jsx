import React from "react";
import "./MyBookingTable.css";

const MyBookingTable = ({ data = [], type }) => {
  console.log("dekho",data);
  return (
    <div className="booking-table-wrapper">
      <h2 className="booking-title">
        {type === "catering" ? "Catering Bookings" : "Utensils Bookings"}
      </h2>

      <div className="booking-table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Date</th>

              {type === "catering" ? (
                <th>Package</th>
              ) : (
                <th>Duration (Days)</th>
              )}

              {type === "catering" && <th>Guests</th>}

              <th>Total Price</th>
              <th>Status</th>
              <th>Created At</th>

              {type === "catering" && <th>Utensils</th>}
              {type === "utensils" && <th>Items</th>}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">
                  No bookings found.
                </td>
              </tr>
            ) : (
              data.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.bookingNumber}</td>
                  <td>{booking.eventDate}</td>

                  {type === "catering" ? (
                    <td>{booking.cateringDetails?.packageName}</td>
                  ) : (
                    <td>{booking.utensilsDetails?.durationDays}</td>
                  )}

                  {type === "catering" && <td>{booking.cateringDetails?.guests}</td>}

                  <td>₹{booking.totalPrice}</td>

                  <td>
                    <span className={`status ${booking.status?.toLowerCase()}`}>
                      {booking.Status}
                    </span>
                  </td>

                  <td>{booking.createdAt}</td>

                  {type === "catering" && (
                    <td>
                      {booking.cateringDetails?.utensils.map((u, index) => (
                        <div key={index} className="item-line">
                          {u.name} ({u.qty})
                        </div>
                      ))}
                    </td>
                  )}

                  {type === "utensils" && (
                    <td>
                      {booking.utensilsDetails?.items?.map((item, index) => (
                        <div key={index} className="item-line">
                          {item.name} — {item.qty} × ₹{item.pricePerDay}/day
                        </div>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingTable;