import React, { useState } from 'react'

import BookingTable from '../components/BookingTable'
import Tabs from '../components/Tabs'
import { cateringBookings, utensilBookings } from '../bookingdata'

const AdminDashboard = () => {

  const[activeTab,setactiveTab]=useState('catering')

  const activeData =
    activeTab === "catering" ? cateringBookings : utensilBookings;

  const totalBookings = activeData.length;
  const confirmedBookings = activeData.filter(
    (b) => b.status === "Approved"
  ).length;
  const pendingBookings = activeData.filter((b) => b.status === "Pending").length;
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

   
    <Tabs activeTab={activeTab} setactiveTab={setactiveTab}/>
    {activeTab==="catering" && (
<BookingTable data={cateringBookings} type="catering"/>
    )}
    {activeTab==="utensils" && (
  <BookingTable data={utensilBookings} type="utensils"/>

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
  )
}

export default AdminDashboard