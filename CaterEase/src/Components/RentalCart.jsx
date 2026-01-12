import React from "react";
import "./RentalCart.css";
import { useNavigate } from "react-router-dom";

const RentalCart = ({ cart = [], setCart }) => {
  const navigate=useNavigate();
  console.log(cart);

  // calculate total cart price
  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const handleremove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }; 
  const increaseqty=(id)=>{
   const updatedCart=cart.map((item)=>{
    if(item.id===id){
      return {...item,qty:item.qty+1};
    }
    return item;
   });
   setCart(updatedCart);
  }
  const decreaseqty=(id)=>{
   const updatedCart=cart.map((item)=>{
    if(item.id===id){
      return {...item,qty:item.qty-1};
    }
    return item;
   });
  const updated =updatedCart.filter(item=>item.qty>0);
   setCart(updated);
  }

  const handleproceed=()=>{
    if(cart.length===0){
      alert('The cart is empty');
      return;
    }
    navigate("/rent/checkout",{
      state:{cart}
    })
  }

  return (
    <div className="cart-panel">
      <h3 className="cart-title">Your Rental Cart</h3>

      {cart.length === 0 ? (
        <p className="empty-cart">No items added yet</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <p className="item-name">{item.name}</p>
                  <p className="item-qty">Qty: {item.qty}</p>
                </div>

                <div className="item-price">₹{item.qty * item.price}</div>
                <button
                  className="remove-btn"
                  onClick={() => handleremove(item.id)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <button onClick={handleproceed} className="cart-btn">Proceed to Rental Details</button>
        </>
      )}
    </div>
  );
};

export default RentalCart;
