import React, { useState, useContext } from "react";
import Input from "../utils/Input";
import TransOptions from "../utils/TransOptions";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import TransContext from "../../store/trans-context";

function TransCategories(props) {
  const { handleInputValues, inputs } = useContext(TransContext);

  const [showOptions, setshowOptions] = useState(false);

  const handleTransOption = () => {
    setshowOptions(!showOptions);
  };

  return (
    <div className="form__item">
      <p className="input-label">Kategorien *</p>

      <div className="form__select">
        <div className="form__select-input">
          <Input
            type="text"
            name="category"
            placeHolder="select"
            value={inputs.category}
            onChange={handleInputValues}
            className="form__date-input"
          />
          <span onClick={handleTransOption}>
            {!showOptions ? <AiFillCaretDown /> : <AiFillCaretUp />}
          </span>
        </div>

        {showOptions && (
          <div className="form__select-options">
            <TransOptions handleOptions={handleTransOption} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TransCategories;
