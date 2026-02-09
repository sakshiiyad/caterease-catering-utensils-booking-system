import React, { useEffect } from "react";
import { getToken } from "../../utils/auth";
import { useState } from "react";

const BookingTable = ({ data, type,setbookings }) => {
  // const[bookings,setbookings]=useState(data)
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const token=getToken();
   
    async function statushandler(id,status){

     setbookings(prev=>{
       let updatedBookings=[];
      for(let i=0;i<prev.length;i++){
        let booking=prev[i];
        if(booking._id===id){
          updatedBookings.push({
            ...booking,
            Status:status
          })
        }
        else{
          updatedBookings.push(booking);

        }
      }
        return updatedBookings;
     })
      
    try{
      const res=await fetch(`http://localhost:5000/api/admin/bookings/${id}/status`,{
      method:"PATCH",
      headers:{"content-Type":"application/json",
       Authorization: `${token}`
      },
      body:JSON.stringify({
        status
      })
    }
      
    )
    const data=await res.json();
    console.log("updated status",data);

    }catch(error){
      console.log("error updating status");

    }
  
  }

 
      
      

    

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
              <tr key={booking._id}>
                <td className="mono">{booking.bookingNumber}</td>
                <td>{booking.user?.name}</td>
                <td>{formatDate(booking.eventDate)}</td>

                {type === "catering" ? (
                  <td>{booking.cateringDetails?.guests}</td>
                ) : (
                  <td>
                    <div className="items-container">
                      {booking.utensilsDetails?.items?.length > 0 ? (
                        booking.utensilsDetails.items.map((item, index) => (
                          <div key={index} className="item-card">
                            <span className="item-name">{item.name}</span>
                            <span className="item-meta">
                              Qty {item.qty} · ₹{item.pricePerDay}/day
                            </span>
                          </div>
                        ))
                      ) : (
                        <span className="muted">No items</span>
                      )}
                    </div>
                  </td>
                )}

                <td>
                  <span className={`status ${booking.Status.toLowerCase()}`}>
                    {booking.Status}
                  </span>
                </td>

                <td>
                  <div className="actions">
                    <button onClick={()=>statushandler(booking._id,"Confirmed")}
                    className="btn approve">Confirm</button>
                    <button onClick={()=>statushandler(booking._id,"Rejected")}
                    className="btn reject">Reject</button>
                    <button onClick={()=>statushandler(booking._id,"Completed")}
                    className="btn done">Completed</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .table-wrap {
          padding: 16px;
        }

        .booking-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        }

        .booking-table th,
        .booking-table td {
          padding: 14px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          font-size: 14px;
          vertical-align: top;
        }

        .booking-table th {
          background: #f9fafb;
          font-weight: 700;
          color: #111827;
        }

        .booking-table tr:hover td {
          background: #f8fafc;
        }

        .mono {
          font-family: monospace;
          font-size: 13px;
          color: #374151;
        }

        /* Items */
        .items-container {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .item-card {
          padding: 8px 10px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #fafafa;
        }

        .item-name {
          font-weight: 600;
          display: block;
          color: #111827;
        }

        .item-meta {
          font-size: 12px;
          color: #6b7280;
        }

        .muted {
          color: #9ca3af;
          font-size: 13px;
        }

        /* Status */
        .status {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          display: inline-block;
        }

        .status.pending {
          background: #fef9c3;
          color: #854d0e;
        }

        .status.approved {
          background: #dcfce7;
          color: #166534;
        }

        .status.rejected {
          background: #fee2e2;
          color: #991b1b;
        }

        .status.completed {
          background: #e5e7eb;
          color: #111827;
        }

        /* Actions */
        .actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 7px 12px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
        }

        .btn.approve {
          background: #16a34a;
          color: white;
        }

        .btn.reject {
          background: #dc2626;
          color: white;
        }

        .btn.done {
          background: #111827;
          color: white;
        }
      `}</style>
    </>
  );
};

export default BookingTable;
