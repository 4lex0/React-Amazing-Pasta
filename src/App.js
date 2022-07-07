import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Greyscreen from "./components/Greyscreen";
import SideList from "./components/SideList";
import { data } from "./menudata.js";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  const menuItems = data;
  const [cartItems, setCartItems] = useState([]);
  const [sideToggle, setSideToggle] = useState(false);

  const handleAdd = (data) => {
    const ItemExist = cartItems.find((item) => item.id === data.id);
    if (ItemExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...ItemExist, quantity: ItemExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };
  const handleRemove = (data) => {
    const ItemExist = cartItems.find((item) => item.id === data.id);
    if (ItemExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== data.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...ItemExist, quantity: ItemExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <div className="App">
      <Nav cartItems={cartItems}  click={() => setSideToggle(true)}/>
      <SideList show={sideToggle} cartItems={cartItems} click={() => setSideToggle(false)}/>
      <Greyscreen show={sideToggle} click={() => setSideToggle(false)}/>
      <AnimatedRoutes
        menuItems={menuItems}
        cartItems={cartItems}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
      <Footer />
    </div>
  );
};

export default App;
