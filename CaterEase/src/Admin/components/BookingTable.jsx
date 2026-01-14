import React from "react";

const BookingTable = ({ data, type }) => {
  return (
    <>
      <div className="table-wrap">
        <table className="booking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Date</th>

              {type === "catering" ? <th>Guests</th> : <th>Items</th>}

              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.customerName}</td>
                <td>{booking.date}</td>

                {type === "catering" ? (
                  <td>{booking.guests}</td>
                ) : (
                  <td>{booking.items}</td>
                )}

                <td>
                  <span className={`status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </td>

                <td className="actions">
                  <button
                    className="btn approve"
                    onClick={() => alert(`Booking ${booking.id} Approved`)}
                  >
                    Approve
                  </button>

                  <button
                    className="btn reject"
                    onClick={() => alert(`Booking ${booking.id} Rejected`)}
                  >
                    Reject
                  </button>

                  <button
                    className="btn done"
                    onClick={() => alert(`Booking ${booking.id} Completed`)}
                  >
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>
        {`
          .table-wrap{
            padding: 10px 20px;
          }

          .booking-table{
            width: 100%;
            border-collapse: collapse;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
          }

          .booking-table th, .booking-table td{
            padding: 12px 14px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
            font-size: 14px;
          }

          .booking-table th{
            background: #f9fafb;
            font-weight: 700;
            color: #111827;
          }

          .booking-table tr:hover td{
            background: #f8fafc;
          }

          .actions{
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }

          .btn{
            padding: 7px 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 600;
          }

          .btn.approve{
            background: #16a34a;
            color: white;
          }

          .btn.reject{
            background: #dc2626;
            color: white;
          }

          .btn.done{
            background: #111827;
            color: white;
          }

          .status{
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            display: inline-block;
          }

          .status.pending{
            background: #fef9c3;
            color: #854d0e;
          }

          .status.approved{
            background: #dcfce7;
            color: #166534;
          }

          .status.rejected{
            background: #fee2e2;
            color: #991b1b;
          }

          .status.completed{
            background: #e5e7eb;
            color: #111827;
          }
        `}
      </style>
    </>
  );
};

export default BookingTable;
