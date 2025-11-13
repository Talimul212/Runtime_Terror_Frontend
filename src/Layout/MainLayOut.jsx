import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayOut = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideLayoutRoutes = ["/register", "/login"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideLayout && <Navbar />}
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default MainLayOut;
