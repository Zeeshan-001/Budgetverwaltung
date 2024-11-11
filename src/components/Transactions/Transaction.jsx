import React from "react";
import { categories } from "../../Helpers/data";
import TransactionBtns from "./TransactionBtns";
import { showDate } from "../utils/showDate";

function Transaction({ onEdit, onDelete, item }) {
  const svgCat = categories.find(
    (cat) => cat.label === item.category || cat.label === "generals"
  );

  const handleColor =
    item.type === "income"
      ? "rgba(75, 192, 192, 0.8)"
      : "rgba(255, 99, 132, 0.8)";

  return (
    <li className="transaction">
      <div
        style={{ backgroundColor: handleColor }}
        className="transaction__border"
      ></div>

      <img className="transaction__icon" src={svgCat.svg} alt="trans label" />

      <p className="transaction__cat">
        {item.category}
        <span style={{ color: handleColor }}>
          € {`${item.amount.toFixed(2).replace(".", ",")}`}
        </span>
      </p>

      <div className="transaction__items">
        <p className="transaction__date">{showDate(item.date)}</p>
        <p className="transaction__note">{item.note}</p>
      </div>

      <TransactionBtns onDelete={onDelete} item={item} onEdit={onEdit} />
    </li>
  );
}

export default Transaction;
