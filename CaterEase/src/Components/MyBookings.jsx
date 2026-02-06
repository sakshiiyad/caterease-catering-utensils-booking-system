import React, { useState,useEffect } from 'react'
import Tabs from '../Admin/components/Tabs'
import MyBookingTable from './MyBookingTable'


import BookingTable from '../Admin/components/BookingTable'
import { getToken } from '../utils/auth'
import { toast } from 'react-toastify'

const MyBookings = () => {
  const [activeTab, setactiveTab] = useState("catering")
  const [bookings,setbookings]=useState([])
  const [loading,setloading]=useState(false)
  const API_URL=`http://localhost:5000/api/bookings/my`;
  const token=getToken();
  useEffect(()=>{
   
    const fetchbookings=async()=>{
       const res=await fetch(API_URL,{
      method:"GET",
      headers:{"content-Type":"application/json",
        Authorization:`${token}`

      },
      
    })
    const data=await res.json();
    console.log(data);
    if(!data.success){
     return toast.error("something went wrong")
    }
   setbookings(data.bookings);

    }
    fetchbookings();

  },[])
  let cateringBookings=bookings.filter(b=>b.bookingType==="catering")
  let rentalBookings=bookings.filter(b=>b.bookingType==="utensils")
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