import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Aboutus from "./Components/Aboutus";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Package from "./Components/Package";
import Rent from "./Components/Rent";
import RentalCheckout from "./Components/RentalCheckout";
import SucessPage from "./Components/SucessPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import ProtectedRoute from "./Components/ProctectedRoute";
import AdminDashboard from "./Admin/pages/AdminDashboard";
import MyBookings from "./Components/MyBookings";
import Inventory from "./Admin/pages/Inventory";

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      {/* ✅ Public Layout Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rent/checkout" element={<RentalCheckout />} />
        <Route path="/checkout/success" element={<SucessPage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Customer */}
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <MyBookings />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* ✅ Admin Layout Routes */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/inventory" element={<Inventory/>}/>
      </Route>
    </Routes>
    </>
  );
};

export default App;
