import React from "react";
import "./packageCheckout.css";
import { useLocation, useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../utils/auth";

const PackageCheckoutPage = () => {
    const navigate=useNavigate();
    const {state}=useLocation();
    console.log(state)
    const[formData,setformData]=useState({
        eventDate:"",
        guests:"",
    });
    const handleChange=(e)=>{

        const{name,value}=e.target;
        setformData({
            ...formData,
            [name]:value

        })
      

    }


const priceperplate=state?.package.price||0;
console.log(priceperplate)
const guestscount=Number(formData.guests);
const totalAmount=priceperplate*guestscount;
const API_URL=`http://localhost:5000/api/bookings`;
const token=getToken();
const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        console.log("try-block")
        if(!formData.eventDate||!formData.guests){
            toast.error("Enter all the fields");
            return;
        }
        const res=await fetch(API_URL,{
            method:"POST",
            headers:{"content-Type":"application/json",
            Authorization: `${token}`,
            },
            body:JSON.stringify({
                bookingType:"catering",
                eventDate:formData.eventDate,
                totalPrice:totalAmount,
                packageName:state?.package.name,
                guests:formData.guests
            })
        })
        const data=await res.json();
        console.log(data);
        if(!data.success){
            return toast.error("Something went wrong. Please try again");
        }
        toast.success(data.message);
       setTimeout(() => {
         navigate("/my-bookings");
        
       }, 3000);



    } catch(error){
        console.log(error)
        toast.error("booking cant be created server error")

    }
}



  return (
    <div className="checkout-page">

      {/* LEFT: Package Summary */}
      <div className="checkout-left">
        <div className="package-summary-card">
          <img
            src={state?.package.image}
            alt="Package"
            className="package-image"
          />

          <div className="package-info">
            <h2>Wedding Veg Buffet</h2>
            <p className="price">₹250 per plate</p>

            <p className="items">
              Rice, dal, roti, 2 curries, sweet dish
            </p>

            <div className="included-note">
              🍽 Utensil recommendations included
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Booking Form */}
      <div className="checkout-right">
        <h2 className="section-title">Booking Details</h2>

        <div className="form-group">
          <label>Event Date</label>
          <input type="date" 
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Guest Count</label>
          <input type="number"
          name="guests"
          value={formData.guests}
            onChange={handleChange}
           placeholder="Enter number of guests" />
        </div>

        <div className="price-box">
          <div className="price-row">
            <span>Price per plate</span>
            <span>₹250</span>
          </div>

          <div className="price-row">
            <span>Total Guests</span>
            <span>{guestscount}</span>
          </div>

          <div className="price-row total">
            <span>Total Amount</span>
            <span>  ₹ {totalAmount}</span>
          </div>
        </div>

        <button className="confirm-btn" onClick={handleSubmit}>
          Confirm Booking
        </button>
      </div>

    </div>
  );
};

export default PackageCheckoutPage;
