import React from "react";

const SelectOrigem = ({ originUpdateFn, origem }) => {
  return (
    <div className="origem">
      <form data-testid="form-origin" className="form-origin">
        <label htmlFor="dddOrigem">De onde você fala atualmente? </label>
        <select
          id="origemDDD"
          data-testid="select-origin"
          name="dddO"
          value={origem}
          onChange={originUpdateFn}
        >
          <option defaultValue value />
          <option id="origem011" value="011" data-testid="select-option-origem">
            011
          </option>
          <option id="origem016" value="016" data-testid="select-option-origem">
            016
          </option>
          <option id="origem017" value="017" data-testid="select-option-origem">
            017
          </option>
          <option id="origem018" value="018" data-testid="select-option-origem">
            018
          </option>
        </select>
      </form>
    </div>
  );
};

export default SelectOrigem;
