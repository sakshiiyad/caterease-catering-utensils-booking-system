import React from 'react'
import "./packagecard.css"
import {useNavigate} from 'react-router-dom'

const packages=[
  {
    id: 1,
    name: "Wedding Veg Buffet",
    price: 300,
    items: "Rice, dal, roti, 2 curries, sweet dish",
    image: "https://media.istockphoto.com/id/849591602/photo/hotel-breakfast-board.jpg?s=2048x2048&w=is&k=20&c=G3BQKnsF9DyH12-mrJK2mSlwSGnwd1p_W2iDj12gQ7E="
  },
  {
    id: 2,
    name: "Premium Veg Buffet",
    price: 160 ,
    items: "Jeera rice, paneer curry, mixed veg, dal fry, naan, gulab jamun",
    image: "https://ranacatering.ca/wp-content/uploads/2024/06/Planning-the-Perfect-Indian-Buffet_-Tips-and-Tricks-1080x675.jpg"
  },
  {
    id: 3,
    name: "Standard Veg Thali",
    price: 200,
    items: "Rice, chapati, dal, sabji, pickle",
    image: "https://static.vecteezy.com/system/resources/previews/056/773/505/non_2x/abundant-indian-food-buffet-displayed-beautifully-photo.jpeg"
  },
  {
    id: 4,
    name: "Deluxe Veg Feast",
    price: 370,
    items: "Pulao, butter naan, paneer, kofta, salad, raita, dessert",
    image: "https://img.freepik.com/premium-photo/indian-ethnic-food-buffet-white-concrete-table-generative-ai_21085-36708.jpg?w=2000"
  },
  {
    id: 5,
    name: "South Indian Special",
    price: 190,
    items: "Idli, dosa, sambar, vada, chutney, sweet",
    image: "https://tse3.mm.bing.net/th/id/OIP.InlgltnGNwj7W93dJ_oQ_gHaEQ?pid=Api&P=0&h=180"
  },
  {
    id: 6,
    name: "North Indian Feast",
    price: 170,
    items: "Tandoori roti, dal makhani, paneer tikka masala, pulao, sweet",
    image: "https://i.pinimg.com/originals/78/3d/10/783d10c5b9fcfc0a1c76ccd3d78c7e35.jpg"
  },
  {
    id: 7,
    name: "Kids Party Veg Pack",
    price: 290,
    items: "Fried rice, noodles, manchurian, ice cream",
    image: "https://www.sheknows.com/wp-content/uploads/2018/08/etanwkme2t98hf67s8wm.jpeg"
  },
  {
    id: 8,
    name: "Budget Veg Buffet",
    price: 360,
    items: "Rice, dal, chapati, sabji",
    image: "https://img.freepik.com/premium-photo/buffet-food-catering-food-party-made-by-aiartificial-intelligence_41969-12071.jpg?w=2000"
  },
  {
    id: 9,
    name: "Festival Special",
    price: 260,
    items: "Poori, chole, pulao, paneer dish, kheer",
    image: "https://middleclass.sg/wp-content/uploads/2025/10/Gupshup-40.jpg"
  }
]

   

const PackageCard = () => {
const navigate=useNavigate();
  function Submithandler(pkg){
    console.log(pkg)
    navigate("/packageCheckoutPage",{state:{package:pkg}});
  }
  return (
  <div className="packages-grid">
  {packages.map((p) => (
    <div key={p.id} className="package-card">

      <img src={p.image} className="package-img" alt={p.name} />

      <h3>{p.name}</h3>

      <p className="price">{p.price}</p>

      <p className="details">{p.items}</p>

      <p className="utensil-note">
        🍽 Includes utensil recommendations
      </p>

      <div className="card-actions">
        <button className="outline-btn" >View Details</button>
        <button className="primary-btn" onClick={()=>Submithandler(p)}>Book Now</button>
      </div>
    </div>
  ))}
</div>

  )
}

export default PackageCard