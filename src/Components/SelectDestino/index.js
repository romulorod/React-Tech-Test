import React from "react";

const SelectDestino = ({ destinyUpdateFn, destiny, originDDD }) => {
  return (
    <div className="destino">
      <form data-testid="form-destino" className="form-destino">
        <label htmlFor="dddDestino">Informe o DDD de destino da ligação: </label>
        <select
          id="destinoDDD"
          name="ddddestino"
          data-testid="select-destino"
          value={destiny}
          onChange={destinyUpdateFn}
        >
          <option defaultValue value />
          {originDDD === "011" && (
            <>
              <option
                id="destino016"
                value="016"
                data-testid="select-option-destino"
              >
                016
              </option>
              <option
                id="destino017"
                value="017"
                data-testid="select-option-destino"
              >
                017
              </option>
              <option
                id="destino018"
                value="018"
                data-testid="select-option-destino"
              >
                018
              </option>
            </>
          )}

          {originDDD === "016" && (
            <>
              <option
                id="destino011"
                value="011"
                data-testid="select-option-destino"
              >
                011
              </option>{" "}
            </>
          )}

          {originDDD === "017" && (
            <>
              <option
                id="destino011"
                value="011"
                data-testid="select-option-destino"
              >
                011
              </option>{" "}
            </>
          )}

          {originDDD === "018" && (
            <>
              <option
                id="destino011"
                value="011"
                data-testid="select-option-destino"
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

export default SelectDestino;
