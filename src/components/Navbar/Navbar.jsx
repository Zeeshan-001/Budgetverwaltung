import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [selectedItem, setselectedItem] = useState("Überblick");

  const nav_items = [
    { label: "Überblick", icon: <BiDetail /> },
    { label: "Transaktionen", icon: <AiOutlineTransaction /> },
  ];

  const handelSelectNavItem = (item) => {
    setselectedItem(item.label);
  };

  const items = nav_items.map((item, i) => (
    <li key={i} onClick={() => handelSelectNavItem(item)}>
      <Link
        to={"/" + item.label}
        className={
          item.label === selectedItem ? "navbar__link active" : "navbar__link"
        }
      >
        {item.icon} {item.label}
      </Link>
    </li>
  ));

  return (
    <div className="navbar">
      <p className="navbar__logo">
        <MdOutlineEuroSymbol />
        <span>MeinBudget</span>
      </p>
      <ul className="navbar__items"> {items} </ul>
    </div>
  );
}

export default Navbar;
