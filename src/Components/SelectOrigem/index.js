import React from "react";

const SelectOrigin = ({ originUpdateFn, origin }) => {
  return (
    <div className="origin">
      <form data-testid="form-origin" className="form-origin">
        <label htmlFor="dddOrigin">De onde você fala atualmente? </label>
        <select
          id="OriginDDD"
          data-testid="select-origin"
          name="OriginDDD"
          value={origin}
          onChange={originUpdateFn}
        >
          <option defaultValue value />
          <option id="origin011" value="011" data-testid="select-option-origin">
            011
          </option>
          <option id="origin016" value="016" data-testid="select-option-origin">
            016
          </option>
          <option id="origin017" value="017" data-testid="select-option-origin">
            017
          </option>
          <option id="origin018" value="018" data-testid="select-option-origin">
            018
          </option>
        </select>
      </form>
    </div>
  );
};

export default SelectOrigin;
