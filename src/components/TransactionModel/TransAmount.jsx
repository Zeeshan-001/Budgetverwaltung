import React, { useContext } from "react";
import Input from "../utils/Input";
import TransContext from "../../store/trans-context";

function TransAmount(props) {
  const { handleInputValues, inputs } = useContext(TransContext);

  return (
    <div className="form__item">
      <p className="input-label">Betrag *</p>

      <Input
        max="10"
        type="number"
        name="amount"
        placeHolder="max 10,000"
        value={inputs.amount}
        className="form__date-input"
        onChange={handleInputValues}
      />
    </div>
  );
}

export default TransAmount;
