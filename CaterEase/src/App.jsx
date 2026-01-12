import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'

import Aboutus from './Components/Aboutus'
import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Package from './Components/Package'
import Rent from './Components/Rent'
import RentalCheckout from './Components/RentalCheckout'
import SucessPage from './Components/SucessPage'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/packages" element={<Package/>}/>
        <Route path="/rent" element={<Rent/>}/>
        <Route path='/rent/checkout' element={<RentalCheckout/>}/>
        <Route path='/checkout/success' element={<SucessPage/>}/>

          
      </Routes>
    </div>
  )
}

export default App