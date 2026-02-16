import React, { useState } from 'react';
import PackageCard from './PackageCard';
import "./package.css";

const Package = () => {
  const [filters, setFilters] = useState({
    guestCount: '',
    foodType: '',
    sortBy: ''
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const clearFilters = () => {
    setFilters({
      guestCount: '',
      foodType: '',
      sortBy: ''
    });
  };

  return (
    <div className="packages-page">

      {/* Header Section */}
      <div className="packages-header">
        <span className="packages-label">Our Offerings</span>
        <h1>Catering Packages</h1>
        <p className="packages-subtitle">
          Choose a package, customize utensils, and book easily — all in one place.
        </p>
      </div>

      {/* Filters Section */}
      <div className="filters-container">
        <div className="filters-wrapper">
          <div className="filters-left">
            <span className="filter-label">Filter & Sort:</span>
            
            <div className="filter-group">
              <label htmlFor="guestCount">
                <span className="filter-icon">👥</span>
                Guest Count
              </label>
              <select 
                id="guestCount"
                name="guestCount"
                value={filters.guestCount}
                onChange={handleFilterChange}
              >
                <option value="">All Guests</option>
                <option value="0-50">0–50 guests</option>
                <option value="50-100">50–100 guests</option>
                <option value="100-200">100–200 guests</option>
                <option value="200+">200+ guests</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="foodType">
                <span className="filter-icon">🍽️</span>
                Food Type
              </label>
              <select 
                id="foodType"
                name="foodType"
                value={filters.foodType}
                onChange={handleFilterChange}
              >
                <option value="">All Types</option>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
                <option value="mixed">Mixed</option>
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
                value={filters.sortBy}
                onChange={handleFilterChange}
              >
                <option value="">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <div className="filters-right">
            <button className="clear-filters-btn" onClick={clearFilters}>
              <span>Clear All</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.guestCount || filters.foodType || filters.sortBy) && (
        <div className="active-filters">
          <span className="active-filters-label">Active Filters:</span>
          <div className="active-filters-tags">
            {filters.guestCount && (
              <span className="filter-tag">
                👥 {filters.guestCount}
                <button onClick={() => setFilters({...filters, guestCount: ''})}>×</button>
              </span>
            )}
            {filters.foodType && (
              <span className="filter-tag">
                🍽️ {filters.foodType}
                <button onClick={() => setFilters({...filters, foodType: ''})}>×</button>
              </span>
            )}
            {filters.sortBy && (
              <span className="filter-tag">
                💰 {filters.sortBy}
                <button onClick={() => setFilters({...filters, sortBy: ''})}>×</button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Packages Grid */}
      <div className="packages-content">
        <div className="packages-info">
          <p>Showing <strong>12 packages</strong> based on your preferences</p>
        </div>

        <PackageCard filters={filters} />
      </div>

    </div>
  );
};

export default Package;