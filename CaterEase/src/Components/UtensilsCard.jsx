import React, { useState } from "react";
import "./UtensilsCard.css"

const utensils = [
  { id: 1, name: "Steel Plate", price: 10, image: "https://m.media-amazon.com/images/I/61h1mcDt1ZL._SL1500_.jpg" },
  { id: 2, name: "Serving Bowl", price: 25, image: "https://m.media-amazon.com/images/I/71Jm6tQ20yL._AC_SL1500_.jpg" },
  { id: 3, name: "Cooking Vessel", price: 80, image: "https://img3.exportersindia.com/product_images/bc-full/2018/7/3249978/aluminium-cooking-vessel-1531907972-4114153.jpeg" },
  { id: 4, name: "Tea Cup", price: 8, image: "https://m.media-amazon.com/images/I/41qW7FlyVnL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 5, name: "Water Glass", price: 6, image: "https://m.media-amazon.com/images/I/51aN9P3b-gS._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 6, name: "Serving Spoon", price: 12, image: "https://m.media-amazon.com/images/I/312A3dVdk+L._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 7, name: "Ladle", price: 15, image: "https://m.media-amazon.com/images/I/41YsFaXVmWL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 8, name: "Pressure Cooker", price: 120, image: "https://m.media-amazon.com/images/I/41OFXY6pMRL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 9, name: "Frying Pan", price: 60, image: "https://cdn.pixabay.com/photo/2016/11/18/15/31/cooking-1835369_1280.jpg" },
  { id: 10, name: "Tawa (Flat Pan)", price: 50, image: "https://m.media-amazon.com/images/I/71+9aUdTkdL._SL1500_.jpg" },
  { id: 11, name: "Rice Storage Container", price: 40, image: "https://m.media-amazon.com/images/I/41Twww-qT3L._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 12, name: "Cutlery Set", price: 35, image: "https://m.media-amazon.com/images/I/51gG6haIMqL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 13, name: "Serving Tray", price: 30, image: "https://m.media-amazon.com/images/I/41VUY5g5qxL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 14, name: "Soup Bowl", price: 18, image: "https://m.media-amazon.com/images/I/61Y7WvJkBZL._SL1500_.jpg" },
  { id: 15, name: "Kettle", price: 70, image: "https://m.media-amazon.com/images/I/61SD93-73+L._SL1000_.jpg" }
];

const UtensilsCard = ({cart,setCart}) => {
  const [qty, setqty] = useState({});

  const handleAddTocart=(item)=>{
    //check quantity first 
    if((qty[item.id]||0)===0)return;
    const existing=cart.find(c=>c.id===item.id);
    console.log(existing)
    if(existing){
      //update the qty
    const updatedcart=  cart.map((Itemincart)=>{
      if(Itemincart.id===item.id){
        return{...Itemincart,qty:qty[item.id]}

      }
      return Itemincart;
    });
    setCart(updatedcart);
    return;
    }
    
      const newitem={...item,qty:qty[item.id]}
      console.log(cart)
      setCart([...cart, newitem]);
    

  }

  const handledecrease = (id) => {
    if ((qty[id] || 0) === 0) return;
    setqty({
      ...qty,
      [id]: (qty[id] || 0) - 1,
    });
  };

  const handleincrease = (id) => {
    setqty({
      ...qty,
      [id]: (qty[id] || 0) + 1,
    });
  };

  return (
    <div className="utensil-grid">
      {utensils.map((u) => (
        
        
        <div key={u.id} className="utensil-card">

          <img src={u.image} alt={u.name} className="utensil-img" />

          <h3 className="utensil-title">{u.name}</h3>

          <p className="utensil-price">₹{u.price} / per day</p>

          <p className="utensil-stock">250 Available</p>

          <div className="qty-box">
            <button className="qty-btn" onClick={() => {console.log(u);
              handledecrease(u.id)
              handledecrease(u.id)
              }}>
              -
            </button>

            <span className="qty-value">{qty[u.id] || 0}</span>

            <button className="qty-btn" onClick={() =>{
              console.log(u);
              handleincrease(u.id)
              handleincrease(u.id)}}>
              +
            </button>
            <button className="add-btn" onClick={()=>handleAddTocart(u)}>Add to Cart</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default UtensilsCard;
