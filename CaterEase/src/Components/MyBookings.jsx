import React, { useState, useEffect } from 'react';
import Tabs from '../Admin/components/Tabs';
import MyBookingTable from './MyBookingTable';
import { getToken } from '../utils/auth';
import { toast } from 'react-toastify';
import './MyBooking.css';

const MyBookings = () => {
  const [activeTab, setactiveTab] = useState("catering");
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(false);
  
  const API_URL = `/api/bookings/my`;
  const token = getToken();

  useEffect(() => {
    const fetchbookings = async () => {
      try {
        setloading(true);
        const res = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`
          },
        });
        
        const data = await res.json();
        console.log(data);
        
        if (!data.success) {
          return toast.error("Something went wrong");
        }
        
        setbookings(data.bookings);
      } catch (error) {
        toast.error("Failed to fetch bookings");
      } finally {
        setloading(false);
      }
    };
    
    fetchbookings();
  }, []);

  const cateringBookings = bookings.filter(b => b.bookingType === "catering");
  const rentalBookings = bookings.filter(b => b.bookingType === "utensils");

  return (
    <div className="my-bookings-page">
      {/* Header Section */}
      <div className="my-bookings-header">
        <h1>My Bookings</h1>
        <p>Track your catering and utensil rental bookings here.</p>
      </div>

      {/* Tabs */}
      <div className="my-bookings-tabs">
        <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
      </div>

      {/* Content */}
      <div className="my-bookings-content">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
            Loading bookings...
          </div>
        ) : (
          <>
            {activeTab === "catering" && (
              <MyBookingTable data={cateringBookings} type="catering" />
            )}
            
            {activeTab === "utensils" && (
              <MyBookingTable data={rentalBookings} type="utensils" />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyBookings;