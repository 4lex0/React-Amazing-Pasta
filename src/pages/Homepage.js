import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

export const Homepage = () => {
  return (
    <motion.div
      className="home"
      style={{
        backgroundImage: "url(./img/restaurants.jpg)",
        width: "100%",
        height: "900px",
        objectFit: "cover",
      }}
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="headerContainer">
        <h1>Amazing Pasta</h1>
        <p style={{ color: "white" }}>Let's get some pasta</p>
        <Link to="/menu">
          <button className="btn btn-outline-secondary">ORDER NOW</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Homepage;
