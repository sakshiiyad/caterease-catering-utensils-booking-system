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
import Login from './Components/Login'
import Signup from './Components/Signup'
import ProtectedRoute from './Components/ProctectedRoute'
import AdminDashboard from './AdminDashboard'
import MyBookings from './Components/MyBookings'



const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
       {/* public routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/packages" element={<Package/>}/>
        <Route path="/rent" element={<Rent/>}/>
        <Route path='/rent/checkout' element={<RentalCheckout/>}/>
        <Route path='/checkout/success' element={<SucessPage/>}/>

        {/* Auth routes */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

          {/* customer routes */}
          <Route path='/my-bookings'
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <MyBookings/>
            </ProtectedRoute>
          }
          />
          
          {/* admin route */}
          <Route path='/admin'
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard/>
            </ProtectedRoute>
          }
          />
        


      </Routes>
    </div>
  )
}

export default App