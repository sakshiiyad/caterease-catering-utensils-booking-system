import React from 'react'
import PackageCard from './PackageCard'
import "./package.css";

const Package = () => {
  return (
    <div>

        <div className="packages-header">
  <h1>Catering Packages</h1>

  <p className="subtitle">
    Choose a package, customize utensils, and book easily.
  </p>
</div>


       <div className="filters">
  <select>
    <option>Guest count</option>
    <option>0–50</option>
    <option>50–100</option>
    <option>100–200</option>
    <option>200+</option>
  </select>

  <select>
    <option>Food type</option>
    <option>Veg</option>
    <option>Non-veg</option>
    <option>Mixed</option>
  </select>

  <select>
    <option>Sort by price</option>
    <option>Low to High</option>
    <option>High to Low</option>
  </select>
</div>

<PackageCard/>





    </div>
  )
}

export default Package