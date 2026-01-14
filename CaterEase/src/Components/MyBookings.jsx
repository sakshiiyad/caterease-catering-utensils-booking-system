import React, { useState } from 'react'
import Tabs from '../Admin/components/Tabs'
import MyBookingTable from './MyBookingTable'
import { cateringBookings, rentalBookings } from './data/mybookingdata'
import BookingTable from '../Admin/components/BookingTable'

const MyBookings = () => {
  const [activeTab, setactiveTab] = useState("catering")
  return (
    <>
    <h1>My Bookings</h1>
    <p>Track your catering and utensil rental bookings here.</p>
    <Tabs activeTab={activeTab} setactiveTab={setactiveTab}/>
    {activeTab==="catering" && ( <MyBookingTable data={cateringBookings} type="catering"/>)}
   
    {activeTab==="utensils" &&(<MyBookingTable data={rentalBookings} type="utensils"/>)}
   
    </>
  )
}

export default MyBookings