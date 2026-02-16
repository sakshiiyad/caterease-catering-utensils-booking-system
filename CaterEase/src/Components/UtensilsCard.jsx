import React, { useState } from "react";
import "./UtensilsCard.css";

const utensils = [
  { 
    id: 1, 
    name: "Steel Plate", 
    price: 10, 
    category: "Dining",
    stock: 250,
    image: "https://m.media-amazon.com/images/I/61h1mcDt1ZL._SL1500_.jpg" 
  },
  { 
    id: 2, 
    name: "Serving Bowl", 
    price: 25, 
    category: "Serving",
    stock: 180,
    image: "https://m.media-amazon.com/images/I/71Jm6tQ20yL._AC_SL1500_.jpg" 
  },
  { 
    id: 3, 
    name: "Cooking Vessel", 
    price: 80, 
    category: "Cooking",
    stock: 95,
    image: "https://img3.exportersindia.com/product_images/bc-full/2018/7/3249978/aluminium-cooking-vessel-1531907972-4114153.jpeg" 
  },
  { 
    id: 4, 
    name: "Tea Cup", 
    price: 8, 
    category: "Dining",
    stock: 300,
    image: "https://m.media-amazon.com/images/I/41qW7FlyVnL._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 5, 
    name: "Water Glass", 
    price: 6, 
    category: "Dining",
    stock: 350,
    image: "https://m.media-amazon.com/images/I/51aN9P3b-gS._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 6, 
    name: "Serving Spoon", 
    price: 12, 
    category: "Serving",
    stock: 200,
    image: "https://m.media-amazon.com/images/I/312A3dVdk+L._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 7, 
    name: "Ladle", 
    price: 15, 
    category: "Cooking",
    stock: 150,
    image: "https://m.media-amazon.com/images/I/41YsFaXVmWL._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 8, 
    name: "Pressure Cooker", 
    price: 120, 
    category: "Cooking",
    stock: 60,
    image: "https://m.media-amazon.com/images/I/41OFXY6pMRL._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 9, 
    name: "Frying Pan", 
    price: 60, 
    category: "Cooking",
    stock: 120,
    image: "https://cdn.pixabay.com/photo/2016/11/18/15/31/cooking-1835369_1280.jpg" 
  },
  { 
    id: 10, 
    name: "Tawa (Flat Pan)", 
    price: 50, 
    category: "Cooking",
    stock: 100,
    image: "https://m.media-amazon.com/images/I/71+9aUdTkdL._SL1500_.jpg" 
  },
  { 
    id: 11, 
    name: "Rice Storage Container", 
    price: 40, 
    category: "Storage",
    stock: 80,
    image: "https://m.media-amazon.com/images/I/41Twww-qT3L._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 12, 
    name: "Cutlery Set", 
    price: 35, 
    category: "Dining",
    stock: 140,
    image: "https://m.media-amazon.com/images/I/51gG6haIMqL._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 13, 
    name: "Serving Tray", 
    price: 30, 
    category: "Serving",
    stock: 110,
    image: "https://m.media-amazon.com/images/I/41VUY5g5qxL._SY300_SX300_QL70_FMwebp_.jpg" 
  },
  { 
    id: 14, 
    name: "Soup Bowl", 
    price: 18, 
    category: "Dining",
    stock: 220,
    image: "https://m.media-amazon.com/images/I/61Y7WvJkBZL._SL1500_.jpg" 
  },
  { 
    id: 15, 
    name: "Kettle", 
    price: 70, 
    category: "Cooking",
    stock: 75,
    image: "https://m.media-amazon.com/images/I/61SD93-73+L._SL1000_.jpg" 
  }
];

const UtensilsCard = ({ cart, setCart }) => {
  const [qty, setQty] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (item) => {
    // Check quantity first
    if ((qty[item.id] || 0) === 0) return;
    
    const existing = cart.find(c => c.id === item.id);
    
    if (existing) {
      // Update the qty
      const updatedCart = cart.map((itemInCart) => {
        if (itemInCart.id === item.id) {
          return { ...itemInCart, qty: qty[item.id] };
        }
        return itemInCart;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...item, qty: qty[item.id] };
      setCart([...cart, newItem]);
    }

    // Show success feedback
    setAddedToCart({ ...addedToCart, [item.id]: true });
    setTimeout(() => {
      setAddedToCart({ ...addedToCart, [item.id]: false });
    }, 2000);
  };

  const handleDecrease = (id) => {
    if ((qty[id] || 0) === 0) return;
    setQty({
      ...qty,
      [id]: (qty[id] || 0) - 1,
    });
  };

  const handleIncrease = (id) => {
    setQty({
      ...qty,
      [id]: (qty[id] || 0) + 1,
    });
  };

  return (
    <div className="utensil-grid">
      {utensils.map((utensil) => (
        <div key={utensil.id} className="utensil-card">
          
          {/* Image Section */}
          <div className="utensil-image-wrapper">
            <img src={utensil.image} alt={utensil.name} className="utensil-img" />
            
            {/* Category Badge */}
            <span className="utensil-category">{utensil.category}</span>
            
            {/* Stock Indicator */}
            {utensil.stock < 100 && (
              <span className="low-stock-badge">Low Stock</span>
            )}
          </div>

          {/* Content Section */}
          <div className="utensil-content">
            
            {/* Title and Stock */}
            <div className="utensil-header">
              <h3 className="utensil-title">{utensil.name}</h3>
              <p className="utensil-stock">
                <span className="stock-icon">📦</span>
                {utensil.stock} Available
              </p>
            </div>

            {/* Price */}
            <div className="utensil-price">
              <span className="price-amount">₹{utensil.price}</span>
              <span className="price-period">/day</span>
            </div>

            {/* Quantity Controls */}
            <div className="qty-controls">
              <div className="qty-selector">
                <button 
                  className="qty-btn qty-decrease" 
                  onClick={() => handleDecrease(utensil.id)}
                  disabled={(qty[utensil.id] || 0) === 0}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>

                <div className="qty-display">
                  <span className="qty-value">{qty[utensil.id] || 0}</span>
                  <span className="qty-label">Qty</span>
                </div>

                <button 
                  className="qty-btn qty-increase" 
                  onClick={() => handleIncrease(utensil.id)}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button 
                className={`add-to-cart-btn ${addedToCart[utensil.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(utensil)}
                disabled={(qty[utensil.id] || 0) === 0}
              >
                {addedToCart[utensil.id] ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Added!
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M6 1.5L3.75 3.75M3.75 3.75L1.5 6M3.75 3.75H11.25C13.3211 3.75 15 5.42893 15 7.5V16.5M15 16.5L12.75 14.25M15 16.5L17.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UtensilsCard;