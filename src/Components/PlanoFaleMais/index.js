import React from "react";
import { FaleMais } from "./styles";
import { DivPlans } from "./styles";
const PlanoFaleMais = ({ planUpdateFn, updateChosenPlan }) => {
  return (
    <>
      <DivPlans>
        <label className="label-plan" data-testid="label-plan">
          Conheça os Incríveis Planos FaleMais:{" "}
        </label>
        <FaleMais
          data-testid="select-plan"
          value={updateChosenPlan}
          onChange={planUpdateFn}
        >
          <option defaultValue value />
          <option id="FaleMais30" data-testid="select-option-plan">
            FaleMais 30
          </option>
          <option id="FaleMais60" data-testid="select-option-plan">
            FaleMais 60
          </option>
          <option id="FaleMais120" data-testid="select-option-plan">
            FaleMais 120
          </option>
        </FaleMais>
      </DivPlans>
    </>
  );
};
export default PlanoFaleMais;
