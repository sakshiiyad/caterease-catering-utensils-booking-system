import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main className="public-content">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
