import React from "react";
import Card from "../UI/Card";
import Type from "./Type";
import TransDate from "./TransDate";
import TransNote from "./TransNote";
import TransAmount from "./TransAmount";
import TransCategories from "./TransCategories";
import RenderButton from "../utils/RenderButton";
import { useContext } from "react";
import TransContext from "../../store/trans-context";

function TransactionModel(props) {
  const ctx = useContext(TransContext);
  const err = Object.keys(ctx.errors).length > 0;
  const errorMessage = err && <div className="error">{ctx.errors}</div>;

  return (
    <Card>
      <div className="form">
        {errorMessage}

        <Type />
        <TransDate />
        <TransCategories />
        <TransNote />
        <TransAmount />

        <div className="form__btns">
          <RenderButton label="Absenden" onClick={ctx.handleSubmit} />
          <RenderButton label="Abbrechen" onClick={ctx.handleTransModel} />
        </div>
      </div>
    </Card>
  );
}

export default TransactionModel;
