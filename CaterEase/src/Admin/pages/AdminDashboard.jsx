import React, { useEffect, useState } from "react";

import BookingTable from "../components/BookingTable";
import Tabs from "../components/Tabs";

import { getToken } from "../../utils/auth";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [activeTab, setactiveTab] = useState("catering");
  const[bookings,setbookings]=useState([]);
  const [loading ,setloading]=useState(true);

  const token=getToken();
  //API call to fetch Bookings
  useEffect(()=>{
    async function getAllbookings(){
      const res=await fetch(`/api/admin/bookings`,{
        method:"GET",
        headers:{"content-Type":"application/json",
          Authorization:`${token}`
        }
      })
      const data=await res.json();
      console.log(data);
      if(!data.success){
        return toast.error("Something went wrong,booking couldn't be fetched");
      }
      setbookings(data.bookings);


     }

     getAllbookings();

  },[])







  const cateringBookings = bookings.filter(b => b.bookingType === "catering");
  const utensilBookings = bookings.filter(b => b.bookingType === "utensils");
  console.log("caretingBooking",cateringBookings);
  console.log("utensilsBooking",utensilBookings);
 
  const currentBookings=activeTab==="catering"?cateringBookings:utensilBookings;
  const totalBookings=currentBookings.length;
  const confirmedBookings=currentBookings.filter(b=>b.Status==="Confirmed").length;
  const pendingBookings=currentBookings.filter(b=>b.Status==="Pending").length;


  
   
 


  return (
    <>
      <h3 className="admin-title">Admin Dashboard</h3>
      <div className="stats">
        <div className="stat-card">
          <p className="stat-title">Total Bookings</p>
          <h2 className="stat-value">{totalBookings}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-title">Confirmed Bookings</p>
          <h2 className="stat-value">{confirmedBookings}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-title">Pending Bookings</p>
          <h2 className="stat-value">{pendingBookings}</h2>
        </div>
      </div>

      <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
      {activeTab === "catering" && (
        <BookingTable data={cateringBookings} setbookings={setbookings} type="catering" />
      )}
      {activeTab === "utensils" && (
        <BookingTable data={utensilBookings} setbookings={setbookings} type="utensils" />
      )}
      <style>
        {`
          .stats{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding: 20px;
          }

          .stat-card{
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 14px;
            padding: 18px;
          }

          .stat-title{
            font-size: 14px;
            font-weight: 600;
            color: #6b7280;
            margin: 0;
          }

          .stat-value{
            margin: 8px 0 0;
            font-size: 26px;
            font-weight: 800;
            color: #111827;
          }

          @media (max-width: 900px){
            .stats{
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default AdminDashboard;
