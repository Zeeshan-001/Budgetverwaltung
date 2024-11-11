import "./SASS/App.scss";
import React, { useState } from "react";
import TransContext from "./store/trans-context";
import Summary from "./components/Summary/Summary";
import DeleteModel from "./components/Portals/DeleteModel";
import AddTransModel from "./components/Portals/addTransModel";
import Transactions from "./components/Transactions/Transactions";

function App(props) {
  const [delItem, setdelItem] = useState();
  const [delModal, setdelModal] = useState(false);
  const [summaryTrans, setsummaryTrans] = useState([]);
  const [transModelShow, settransModelShow] = useState(false);
  const [totalTransactions, settotalTransactions] = useState([]);
  const [errors, seterrors] = useState({});
  const [inputs, setinputs] = useState({
    _id: "",
    type: "",
    date: "",
    category: "",
    note: "",
    amount: "",
  });

  const handleInputValues = ({ currentTarget }) => {
    setinputs((prevState) => {
      return { ...prevState, [currentTarget.name]: currentTarget.value };
    });
  };

  const handleTransModel = (seledType) => {
    if (seledType) {
      setinputs((prevState) => {
        return { ...prevState, type: seledType };
      });
    } else {
      clearValues();
    }
    settransModelShow(!transModelShow);
  };

  const handleSelectItem = (item) => {
    setinputs((prevState) => {
      return { ...prevState, category: item };
    });
  };

  const handleTotalTrans = (item) => {
    const transArray = totalTransactions;
    transArray.unshift(item);
    settotalTransactions(transArray);
  };

  const handleSummayTrans = () => {
    const expenses = totalTransactions.filter((s) => s.type === "expense");
    const categories = new Set(expenses.map((c) => c.category));

    const catTransactions = [...categories].map((c) => {
      return totalTransactions.filter((t) => t.category === c);
    });

    const totalAmount = [...categories].map((c, i) => {
      return catTransactions[i]
        .map((c) => c.amount)
        .reduce((acc, t) => t + acc, 0);
    });

    const arr = [...categories].map((cat, i) => {
      return { category: cat, amount: totalAmount[i] };
    });
    setsummaryTrans([...arr]);
  };

  const clearValues = () => {
    const inputValues = inputs;

    for (let key in inputValues) {
      inputValues[key] = "";
    }
    setinputs(inputValues);
  };

  const handleValidation = () => {
    const totalErr = {};

    if (inputs.type === "") return (totalErr.type = "Select Type");
    if (inputs.date.trim() === "") return (totalErr.date = "Select Date");
    if (inputs.category.trim() === "")
      return (totalErr.category = "Select Category");
    if (inputs.amount.trim() === "") return (totalErr.amount = "Enter amount");

    return Object.keys(totalErr).length === 0 ? null : totalErr;
  };

  const handleInputs = () => {
    const item = {
      _id: Date.now(),
      type: inputs.type,
      date: inputs.date,
      category: inputs.category.slice(0, 12),
      note: inputs.note.slice(0, 9) || "N/A",
      amount: Number(inputs.amount.replace("-", "")),
    };
    return item;
  };

  const handleSubmit = () => {
    const item = handleInputs();
    const totalErr = handleValidation();

    seterrors(totalErr || {});
    if (totalErr) return console.log("Error");

    const trans = totalTransactions;
    const transIndex = trans.findIndex((t) => t._id === inputs._id);

    if (transIndex >= 0) {
      trans[transIndex] = item;
      settotalTransactions(trans);
    } else {
      handleTotalTrans({ ...item });
      handleSummayTrans();
    }

    settransModelShow(false);
    clearValues();
  };

  //***** DELETE *****//
  const getDeleteItem = (item) => {
    setdelModal(true);
    setdelItem(item);
  };

  const handleDeleteConfirm = (status) => {
    if (status === "confirm") {
      const updateTrans = totalTransactions.filter(
        (tr) => tr._id !== delItem._id
      );
      settotalTransactions([...updateTrans]);
      handleSummayTrans();
    }
    setdelModal(false);
  };

  const handleEditTrans = (item) => {
    settransModelShow(true);
    const inputValues = inputs;

    for (let key in inputValues) {
      inputValues[key] = item[key];
    }

    setinputs(inputValues);
  };

  const transContext = {
    inputs,
    errors,
    delItem,
    summaryTrans,
    totalTransactions,
    delModal,
    transModelShow,
    clearValues,
    handleSubmit,
    getDeleteItem,
    handleSelectItem,
    handleTotalTrans,
    handleSummayTrans,
    handleTransModel,
    handleDeleteConfirm,
    handleInputValues,
    handleEditTrans,
  };

  return (
    <TransContext.Provider value={transContext}>
      {transModelShow && <AddTransModel />}
      {delModal && <DeleteModel />}

      <main className="container">
        <Summary />
        <Transactions />
      </main>
    </TransContext.Provider>
  );
}

export default App;
