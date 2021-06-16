import React from "react";
import { FaleMais } from "./styles";
import { PlanosDiv } from "./styles";
const PlanoFaleMais = ({ planUpdateFn, planoEscolhido }) => {
  return (
    <>
      <PlanosDiv>
        <label className="label-plano" data-testid="label-plano">
          Escolha seu Plano FaleMais:{" "}
        </label>
        <FaleMais
          data-testid="select-plano"
          value={planoEscolhido}
          onChange={planUpdateFn}
        >
          <option defaultValue value />
          <option id="FaleMais30" data-testid="select-option-plano">
            FaleMais 30
          </option>
          <option id="FaleMais60" data-testid="select-option-plano">
            FaleMais 60
          </option>
          <option id="FaleMais120" data-testid="select-option-plano">
            FaleMais 120
          </option>
        </FaleMais>
      </PlanosDiv>
    </>
  );
};
export default PlanoFaleMais;
