import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const SideList = ({ show, click, cartItems }) => {
  const sideListClass = ["sidelist"];
  if (show) {
    sideListClass.push("show");
  }
  return (
    <div className={sideListClass.join(" ")}>
      <ul className="sidelist-links" onClick={click}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-length">
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideList;
