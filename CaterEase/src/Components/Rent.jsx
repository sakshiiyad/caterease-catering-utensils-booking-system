import React, { useState } from "react";
import UtensilsCard from "./UtensilsCard";
import RentalCart from "./RentalCart";
import "./Rent.css";

const Rent = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    sortBy: '',
    date: ''
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      sortBy: '',
      date: ''
    });
  };

  return (
    <div className="rent-page">

      {/* HEADER */}
      <div className="rent-header">
        <span className="rent-label">Utensil Rental</span>
        <h1>Rent Utensils for Your Event</h1>
        <p className="rent-subtitle">
          Flexible quantities, clean and well-maintained utensils — delivered to your doorstep.
        </p>
      </div>

      {/* FILTERS */}
      <div className="rent-filters-container">
        <div className="rent-filters-wrapper">
          <div className="filters-left">
            <span className="filter-label">Filter & Sort:</span>
            
            <div className="filter-group">
              <label htmlFor="category">
                <span className="filter-icon">🍽️</span>
                Category
              </label>
              <select 
                id="category"
                name="category"
                className="rent-select"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="">All Categories</option>
                <option value="dining">Dining</option>
                <option value="serving">Serving</option>
                <option value="cooking">Cooking</option>
                <option value="storage">Storage</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sortBy">
                <span className="filter-icon">💰</span>
                Sort By
              </label>
              <select 
                id="sortBy"
                name="sortBy"
                className="rent-select"
                value={filters.sortBy}
                onChange={handleFilterChange}
              >
                <option value="">Featured</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="date">
                <span className="filter-icon">📅</span>
                Rental Date
              </label>
              <input 
                type="date" 
                id="date"
                name="date"
                className="rent-date"
                value={filters.date}
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="filters-right">
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="rent-content">
        
        {/* Utensils Grid */}
        <div className="rent-utensils-section">
          <div className="utensils-info">
            <p>
              Showing <strong>{15} utensils</strong> 
              {cart.length > 0 && (
                <span className="cart-indicator">
                  • <strong>{cart.length} items</strong> in cart
                </span>
              )}
            </p>
          </div>
          <UtensilsCard cart={cart} setCart={setCart} filters={filters} />
        </div>

        {/* Cart Panel - Sticky */}
        <div className="rent-cart-section">
          <div className="cart-sticky-wrapper">
            <RentalCart cart={cart} setCart={setCart} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Rent;