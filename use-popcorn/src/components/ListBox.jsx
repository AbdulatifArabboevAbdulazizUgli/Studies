import React from "react";
import { useState } from "react";

function ListBox({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="box">
      <button className="btn-toggle" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default ListBox;
