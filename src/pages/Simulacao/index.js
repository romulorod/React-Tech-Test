import React, { useState, useEffect } from "react";
import SelectOrigem from "../../Components/SelectOrigem";
import SelectDestino from "../../Components/SelectDestino";
import MinutosPorMes from "../../Components/MinutosPorMes";
import PlanoFaleMais from "../../Components/PlanoFaleMais";

import "./styles.css";

const Simulacao = () => {
  const [price, setPrice] = useState((0).toFixed(2));
  const [minutes, setMinutes] = useState(0);
  const [originDDD, setOriginDDD] = useState("");
  const [destinyDDD, setDestinyDDD] = useState("");
  const [chosenPlan, setChosenPlan] = useState("");
  const [MinuteValue, setMinueValue] = useState(0);
  const [originalPrice, setOriginalPrice] = useState((0).toFixed(2));

  function updateOrigin(e) {
    setOriginDDD(e.target.value);
  }

  function updateDestiny(e) {
    setDestinyDDD(e.target.value);
  }

  useEffect(() => {
    switch(destinyDDD){
      case '':
        setPrice(0)
      break
      case '016':
      setMinueValue(1.9);
      break
      case '017':
      setMinueValue(1.7);
      break
      case '018':
      setMinueValue(0.9);
      break
    }
      switch(originDDD){
        case '':
        setPrice(0)
        break
        case '016':
        setMinueValue(2.9);
        break
        case '017':
        setMinueValue(2.7);
        break
        case '018':
        setMinueValue(1.9);
        break
    }
  }, [destinyDDD, originDDD]);

  function updateChosenPlan(e) {
    setChosenPlan(e.target.value);
  }

  function updateMinutes(e) {
    setMinutes(e.target.value);
  }

  useEffect(() => {
    if (chosenPlan === "") return;
    if (minutes === "0") {
      return;
    }
    // TODO: melhorar essa lógica aqui. mais tarde vejo com calma
    if (
      chosenPlan === "FaleMais 30" ||
      chosenPlan === "FaleMais 60" ||
      chosenPlan === "FaleMais 120"
    ) {
      setPrice(parseFloat(0).toFixed(2));
    }
    if (chosenPlan === "FaleMais 30" && minutes <= 30) {
      setPrice(parseFloat(0).toFixed(2));
    }
    if (chosenPlan === "FaleMais 30" && minutes > 30) {
      setPrice(parseFloat(((minutes - 30) * MinuteValue * 1.1).toFixed(2)));
    }
    if (chosenPlan === "FaleMais 60" && minutes <= 60) {
      setPrice(parseFloat(0).toFixed(2));
    }
    if (chosenPlan === "FaleMais 60" && minutes > 60) {
      setPrice(parseFloat(((minutes - 60) * MinuteValue * 1.1).toFixed(2)));
    }
    if (chosenPlan === "FaleMais 120" && minutes <= 120) {
      setPrice(parseFloat(0).toFixed(2));
    }
    if (chosenPlan === "FaleMais 120" && minutes > 120) {
      setPrice(parseFloat(((minutes - 120) * MinuteValue * 1.1).toFixed(2)));
    } else {
      setOriginalPrice((minutes * MinuteValue).toFixed(2));
    }
  }, [chosenPlan, minutes, MinuteValue]);

  return (
    <>
      <div className="form-div">
        <SelectOrigem originUpdateFn={updateOrigin} origin={originDDD} />
        <SelectDestino
          destinyUpdateFn={updateDestiny}
          destiny={destinyDDD}
          originDDD={originDDD}
        />
      </div>
      <div className="plano-minutos">
        <PlanoFaleMais
          planUpdateFn={updateChosenPlan}
          chosenPlan={chosenPlan}
        />
        <MinutosPorMes minutesUpdateFn={updateMinutes} />
      </div>
      <div id="resultado">
        <div className="preco-com-plano" data-testid="preco-com-plano">
          {" "}
          Com o plano escolhido, por mês:
          <p>
            <br />
            {price}
          </p>
        </div>
        <div className="preco-sem-plano" data-testid="preco-sem-plano">
          Valor sem nosso maravilhoso plano:{" "}
          <p>
            <br />
            {originalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default Simulacao;
