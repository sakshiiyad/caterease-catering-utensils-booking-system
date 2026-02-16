import React from 'react';
import "./packagecard.css";
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    id: 1,
    name: "Wedding Veg Buffet",
    price: 300,
    perPerson: true,
    category: "Premium",
    serves: "50-100",
    items: "Rice, dal, roti, 2 curries, sweet dish",
    image: "https://media.istockphoto.com/id/849591602/photo/hotel-breakfast-board.jpg?s=2048x2048&w=is&k=20&c=G3BQKnsF9DyH12-mrJK2mSlwSGnwd1p_W2iDj12gQ7E=",
    popular: true
  },
  {
    id: 2,
    name: "Premium Veg Buffet",
    price: 160,
    perPerson: true,
    category: "Premium",
    serves: "30-50",
    items: "Jeera rice, paneer curry, mixed veg, dal fry, naan, gulab jamun",
    image: "https://ranacatering.ca/wp-content/uploads/2024/06/Planning-the-Perfect-Indian-Buffet_-Tips-and-Tricks-1080x675.jpg"
  },
  {
    id: 3,
    name: "Standard Veg Thali",
    price: 200,
    perPerson: true,
    category: "Standard",
    serves: "20-40",
    items: "Rice, chapati, dal, sabji, pickle",
    image: "https://static.vecteezy.com/system/resources/previews/056/773/505/non_2x/abundant-indian-food-buffet-displayed-beautifully-photo.jpeg"
  },
  {
    id: 4,
    name: "Deluxe Veg Feast",
    price: 370,
    perPerson: true,
    category: "Deluxe",
    serves: "50-100",
    items: "Pulao, butter naan, paneer, kofta, salad, raita, dessert",
    image: "https://img.freepik.com/premium-photo/indian-ethnic-food-buffet-white-concrete-table-generative-ai_21085-36708.jpg?w=2000",
    popular: true
  },
  {
    id: 5,
    name: "South Indian Special",
    price: 190,
    perPerson: true,
    category: "Regional",
    serves: "25-50",
    items: "Idli, dosa, sambar, vada, chutney, sweet",
    image: "https://tse3.mm.bing.net/th/id/OIP.InlgltnGNwj7W93dJ_oQ_gHaEQ?pid=Api&P=0&h=180"
  },
  {
    id: 6,
    name: "North Indian Feast",
    price: 170,
    perPerson: true,
    category: "Regional",
    serves: "30-60",
    items: "Tandoori roti, dal makhani, paneer tikka masala, pulao, sweet",
    image: "https://i.pinimg.com/originals/78/3d/10/783d10c5b9fcfc0a1c76ccd3d78c7e35.jpg"
  },
  {
    id: 7,
    name: "Kids Party Veg Pack",
    price: 290,
    perPerson: true,
    category: "Special",
    serves: "20-40",
    items: "Fried rice, noodles, manchurian, ice cream",
    image: "https://www.sheknows.com/wp-content/uploads/2018/08/etanwkme2t98hf67s8wm.jpeg"
  },
  {
    id: 8,
    name: "Budget Veg Buffet",
    price: 360,
    perPerson: true,
    category: "Budget",
    serves: "40-80",
    items: "Rice, dal, chapati, sabji",
    image: "https://img.freepik.com/premium-photo/buffet-food-catering-food-party-made-by-aiartificial-intelligence_41969-12071.jpg?w=2000"
  },
  {
    id: 9,
    name: "Festival Special",
    price: 260,
    perPerson: true,
    category: "Premium",
    serves: "30-60",
    items: "Poori, chole, pulao, paneer dish, kheer",
    image: "https://middleclass.sg/wp-content/uploads/2025/10/Gupshup-40.jpg"
  }
];

const PackageCard = ({ filters }) => {
  const navigate = useNavigate();

  function handleBookNow(pkg) {
    console.log(pkg);
    navigate("/packageCheckoutPage", { state: { package: pkg } });
  }

  function handleViewDetails(pkg) {
    // You can navigate to a details page or open a modal
    console.log("View details for:", pkg);
  }

  return (
    <div className="packages-grid">
      {packages.map((pkg) => (
        <div key={pkg.id} className="package-card">
          
          {/* Image Section */}
          <div className="package-image-wrapper">
            <img src={pkg.image} className="package-img" alt={pkg.name} />
            
            {/* Badges */}
            <div className="package-badges">
              {pkg.popular && (
                <span className="badge badge-popular">⭐ Popular</span>
              )}
              <span className="badge badge-category">{pkg.category}</span>
            </div>

            {/* Overlay on hover */}
            <div className="package-overlay">
              <button 
                className="quick-view-btn"
                onClick={() => handleViewDetails(pkg)}
              >
                Quick View
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="package-content">
            
            {/* Header */}
            <div className="package-header">
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-serves">
                <span className="serves-icon">👥</span>
                <span>{pkg.serves} guests</span>
              </div>
            </div>

            {/* Price */}
            <div className="package-price">
              <span className="price-amount">₹{pkg.price}</span>
              <span className="price-per">/person</span>
            </div>

            {/* Items */}
            <p className="package-items">{pkg.items}</p>

            {/* Features */}
            <div className="package-features">
              <div className="feature-item">
                <span className="feature-icon">🍽️</span>
                <span>Utensils included</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Fresh & hygienic</span>
              </div>
            </div>

            {/* Actions */}
            <div className="package-actions">
              <button 
                className="btn-secondary"
                onClick={() => handleViewDetails(pkg)}
              >
                View Details
              </button>
              <button 
                className="btn-primary"
                onClick={() => handleBookNow(pkg)}
              >
                Book Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;