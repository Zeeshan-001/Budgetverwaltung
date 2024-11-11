import React, { useContext } from "react";
import TransContext from "../../store/trans-context";
import { LiaEuroSignSolid } from "react-icons/lia";

function SummaryTrans(props) {
  const ctx = useContext(TransContext);

  const trans = ctx.summaryTrans.map((trans, i) => (
    <li key={i} className="summary--trans__categorie">
      {trans.category} <span>{trans.amount}€</span>
    </li>
  ));

  const income = ctx.totalTransactions
    .filter((tr) => tr.type === "income")
    .reduce((acc, mov) => (acc += mov.amount), 0);

  const expense = ctx.summaryTrans.reduce((acc, mov) => (acc += mov.amount), 0);

  const totalBalance = income - expense;

  return (
    <div className="summary--trans">
      {/* Überschrift des zusammenfassenden Containers */}
      <div className="summary--trans__heading">
        {/* Einkommen  */}
        <p className="summary--trans__income">
          <span>
            <LiaEuroSignSolid />
            {!income ? "0,00" : `${income},00`}
          </span>
          {/* Label für Einkommen */}
          Einkommen
        </p>
        {/* Ausgaben */}
        <p className="summary--trans__expense">
          <span>
            <LiaEuroSignSolid />
            {!expense ? "0,00" : `${expense},00`}
          </span>
          {/* Label für Ausgabe */}
          Ausgabe
        </p>
        {/* Total */}
        <p className="summary--trans__balance">
          <span>
            <LiaEuroSignSolid />
            {!totalBalance ? "0,00" : `${totalBalance},00`}
          </span>
          {/* Label für Saldo */}
          der Saldo
        </p>
      </div>
    </div>
  );
}

export default SummaryTrans;
