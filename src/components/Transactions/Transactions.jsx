import React from "react";
import { useContext } from "react";
import TransContext from "../../store/trans-context";
import Transaction from "./Transaction";
import TransEmpty from "./TransEmpty";
import { transactions } from "../../services/transData";

function Transactions(props) {
  const ctx = useContext(TransContext);

  const renderTransactions = ctx.totalTransactions.map((item) => (
    <Transaction
      item={item}
      key={item._id}
      onDelete={ctx.getDeleteItem}
      onEdit={ctx.handleEditTrans}
    />
  ));

  return (
    <div className="transactions__container ">
      <ul className="transactions">
        {ctx.totalTransactions.length > 0 ? renderTransactions : <TransEmpty />}
      </ul>
    </div>
  );
}

export default Transactions;
