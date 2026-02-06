import React from "react";

const MyBookingTable = ({ data = [], type }) => {
  console.log("dekho",data);
  return (
    <>
      <style>{`
        .booking-table-wrapper{
          width: 100%;
          padding: 20px;
        }

        .booking-title{
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #222;
        }

        .booking-table-container{
          width: 100%;
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
        }

        .booking-table{
          width: 100%;
          border-collapse: collapse;
          min-width: 900px;
          background: #fff;
        }

        .booking-table thead{
          background: #111827;
          color: white;
        }

        .booking-table th,
        .booking-table td{
          padding: 14px 16px;
          text-align: left;
          font-size: 14px;
          border-bottom: 1px solid #e5e7eb;
        }

        .booking-table tbody tr:hover{
          background: #f9fafb;
          transition: 0.2s;
        }

        .no-data{
          text-align: center;
          padding: 20px;
          font-weight: 600;
          color: #6b7280;
        }

        .item-line{
          font-size: 13px;
          padding: 3px 0;
          color: #374151;
        }

        /* Status Pills */
        .status{
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          text-transform: capitalize;
        }

        .status.pending{
          background: #fef3c7;
          color: #92400e;
        }

        .status.confirmed{
          background: #d1fae5;
          color: #065f46;
        }

        .status.completed{
          background: #dbeafe;
          color: #1e40af;
        }

        .status.rejected,
        .status.cancelled{
          background: #fee2e2;
          color: #991b1b;
        }
      `}</style>

      <div className="booking-table-wrapper">
        <h2 className="booking-title">
          {type === "catering" ? "Catering Bookings" : "Rental Bookings"}
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
                    <td>{booking._id}</td>
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
    </>
  );
};

export default MyBookingTable;
