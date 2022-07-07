import React from "react";

import { motion } from "framer-motion/dist/framer-motion";

export const Menu = ({ menuItems, handleAdd }) => {
  return (
    <motion.div
      className="menuList"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1>MENU</h1>
        <div className="row">
          {menuItems.map((menuItem) => (
            <div className="g-5  col-12 col-md-4 ">
              <div className="card " key={menuItem.id}>
                <img
                  className="menu-img img-thumbnail  "
                  src={menuItem.img}
                  alt=""
                />
                <h3 className="card-text text-center">{menuItem.name}</h3>
                <br />
                <h5>{menuItem.price}$</h5>
                <button
                  className="btn btn-outline-dark "
                  onClick={() => handleAdd(menuItem)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
