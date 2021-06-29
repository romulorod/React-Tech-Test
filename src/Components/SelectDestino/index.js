import React from "react";

const SelectDestiny = ({ destinyUpdateFn, destiny, originDDD }) => {
  return (
    <div className="destiny">
      <form data-testid="form-destiny" className="form-destiny">
        <label htmlFor="DestinyDDD">Informe o DDD de destino da ligação: </label>
        <select
          id="DestinyDDD"
          name="DestinyDDD"
          data-testid="select-destiny"
          value={destiny}
          onChange={destinyUpdateFn}
        >
          <option defaultValue value />
          {originDDD === "011" && (
            <>
              <option
                id="destiny016"
                value="016"
                data-testid="select-option-destiny"
              >
                016
              </option>
              <option
                id="destiny017"
                value="017"
                data-testid="select-option-destiny"
              >
                017
              </option>
              <option
                id="destiny018"
                value="018"
                data-testid="select-option-destiny"
              >
                018
              </option>
            </>
          )}

          {originDDD === "016" && (
            <>
              <option
                id="destiny011"
                value="011"
                data-testid="select-option-destiny"
              >
                011
              </option>{" "}
            </>
          )}

          {originDDD === "017" && (
            <>
              <option
                id="destiny011"
                value="011"
                data-testid="select-option-destiny"
              >
                011
              </option>{" "}
            </>
          )}

          {originDDD === "018" && (
            <>
              <option
                id="destiny011"
                value="011"
                data-testid="select-option-destiny"
              >
                011
              </option>{" "}
            </>
          )}
        </select>
      </form>
    </div>
  );
};

export default SelectDestiny;
