import React, { useContext } from "react";
import TransContext from "../../store/trans-context";
import RenderButton from "../utils/RenderButton";
import { SlPlus } from "react-icons/sl";
import { SlMinus } from "react-icons/sl";

function SummaryBtns() {
  const ctx = useContext(TransContext);
  return (
    <div className="summary__btns">
      <RenderButton
        label={<SlPlus />}
        onClick={() => ctx.handleTransModel("income")}
      />

      <RenderButton
        label={<SlMinus />}
        onClick={() => ctx.handleTransModel("expense")}
      />
    </div>
  );
}

export default SummaryBtns;
//
