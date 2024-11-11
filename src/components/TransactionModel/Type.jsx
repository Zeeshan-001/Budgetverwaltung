import React, { useContext } from "react";
import Input from "../utils/Input";
import TransContext from "../../store/trans-context";

function Type(props) {
  const { handleInputValues, inputs } = useContext(TransContext);

  return (
    <div className="form__item">
      <form className="options">
        <div className="form__group">
          <Input
            label="income"
            type="radio"
            name="type"
            value="income"
            className="form__radio-input"
            onChange={handleInputValues}
            checked={inputs.type === "income"}
          />

          <label htmlFor="income" className="form__radio-label">
            <span className="form__radio-button"></span> income
          </label>
        </div>

        <div className="form__group">
          <Input
            label="expense"
            type="radio"
            name="type"
            value="expense"
            className="form__radio-input"
            onChange={handleInputValues}
            checked={inputs.type === "expense"}
          />

          <label htmlFor="expense" className="form__radio-label">
            <span className="form__radio-button"></span> expense
          </label>
        </div>
      </form>
    </div>
  );
}

export default Type;
