import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";

export const Nav = ({ cartItems, click }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <nav>
      <h2>Amazing Pasta</h2>
      <ul className="navbar-links">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
        >
          <Link to="/Menu">Menu</Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
        >
          <Link to="/About">About</Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
        >
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-length">
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </Link>
        </motion.li>
      </ul>
      <div className="menu-btn" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
