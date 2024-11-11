import React, { useContext } from "react";
import TransContext from "../../store/trans-context";
import Input from "../utils/Input";

function TransDate(props) {
  const { handleInputValues, inputs } = useContext(TransContext);

  return (
    <div className="form__item">
      <p className="input-label">Datum</p>

      <Input
        type="date"
        min="2022-01-01"
        name="date"
        value={inputs.date}
        onChange={handleInputValues}
        className="form__date-input"
      />
    </div>
  );
}

export default TransDate;
