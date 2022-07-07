import React from "react";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion/dist/framer-motion";

export const AnimatedRoutes = ({menuItems, cartItems, handleAdd, handleRemove }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Homepage />} />
        <Route path="/Menu" element={<Menu  menuItems={menuItems} handleAdd ={handleAdd }/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} handleAdd ={handleAdd } handleRemove={handleRemove}/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
