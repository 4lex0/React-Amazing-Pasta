import React from "react";

const Greyscreen = ({ show, click }) => {
  return show && <div className="greyscreen" onClick={click}></div>;
};

export default Greyscreen;
