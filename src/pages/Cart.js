import React from "react";
import CartItem from "../components/CartItem";

const Cart = ({ cartItems, handleAdd, handleRemove }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-box">
      <div className="cart-box-left">
        <h2>My cart</h2>
        <CartItem
          cartItems={cartItems}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
        {cartItems.length === 0 && (
          <div className="cart-box-empty">Are you not hungry ?!</div>
        )}
      </div>
      <div className="cart-box-right">
        <div className="cart-box-info">
          <p>Total price:{totalPrice}$</p>
        </div>
        <div>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
