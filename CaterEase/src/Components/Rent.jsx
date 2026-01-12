import React from "react";
import UtensilsCard from "./UtensilsCard";
import { useState } from "react";
import "./Rent.css";
import RentalCart from "./RentalCart";

const Rent = () => {
  const[cart,setCart]=useState([]);
  return (
    <div className="rent-page">

      {/* HEADER */}
      <div className="rent-header">
        <h2>Rent Utensils</h2>

        <p>
          Rent utensils for your event — flexible quantities, clean and well-maintained.
        </p>
      </div>

      {/* FILTERS */}
      <div className="rent-filters">

        <select className="rent-select">
          <option>Category</option>
          <option>Plates</option>
          <option>Serving</option>
          <option>Cooking</option>
          <option>Storage</option>
        </select>

        <select className="rent-select">
          <option>Sort by price</option>
          <option>Low → High</option>
          <option>High → Low</option>
        </select>

        <input type="date" className="rent-date" />
      </div>

    <div className="rent-grid-wrapper">

  <div>
    <UtensilsCard cart={cart} setCart={setCart} />
  </div>

  <div>
    <div className="cart-panel">
 
 <RentalCart cart={cart} setCart={setCart}/>
</div>

  </div>

</div>


    </div>
  );
};

export default Rent;
