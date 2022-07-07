import React from "react";

const CartItem = ({ cartItems, handleAdd, handleRemove }) => {
  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item-list">
          <img className="cart-items-img" src={item.img} alt="" />
          <div className="cart-items-name">{item.name}</div>
          <p className="cart-items-price">{item.quantity}*{item.price}$</p>
          <button className="cart-remove" onClick={() => handleRemove(item)}>
            -
          </button>
          <button className="cart-add" onClick={() => handleAdd(item)}>
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
