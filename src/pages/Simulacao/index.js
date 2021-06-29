import React, { useState, useEffect } from "react";
import SelectOrigem from "../../Components/SelectOrigem";
import SelectDestino from "../../Components/SelectDestino";
import MinutosPorMes from "../../Components/MinutosPorMes";
import PlanoFaleMais from "../../Components/PlanoFaleMais";

import "./styles.css";

const Simulacao = () => {
  const [preco, setPreco] = useState((0).toFixed(2));
  const [minutos, setMinutos] = useState(0);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [planoEscolhido, setPlanoEscolhido] = useState("");
  const [valorMin, setValorMin] = useState(0);
  const [precoSemPlano, setPrecoSemPlano] = useState((0).toFixed(2));

  function updateOrigem(e) {
    setOrigem(e.target.value);
  }

  function updateDestino(e) {
    setDestino(e.target.value);
  }

  useEffect(() => {
    // TODO: utilizar um switch case
    if (destino === "") return;
    if (destino === "016") {
      setValorMin(1.9);
    }
    if (destino === "017") {
      setValorMin(1.7);
    }
    if (destino === "018") {
      setValorMin(0.9);
    }
    if (origem === "016") {
      setValorMin(2.9);
    }
    if (origem === "017") {
      setValorMin(2.7);
    }
    if (origem === "018") {
      setValorMin(1.9);
    }
  }, [destino, origem]);

  function updatePlanoEscolhido(e) {
    setPlanoEscolhido(e.target.value);
  }

  function updateMinutos(e) {
    setMinutos(e.target.value);
  }

  useEffect(() => {
    if (planoEscolhido === "") return;
    if (minutos === "0") {
      return;
    }
    // TODO: melhorar essa lógica aqui. mais tarde vejo com calma
    if (
      planoEscolhido === "FaleMais 30" ||
      planoEscolhido === "FaleMais 60" ||
      planoEscolhido === "FaleMais 120"
    ) {
      setPreco(parseFloat(0).toFixed(2));
    }
    if (planoEscolhido === "FaleMais 30" && minutos <= 30) {
      setPreco(parseFloat(0).toFixed(2));
    }
    if (planoEscolhido === "FaleMais 30" && minutos > 30) {
      setPreco(parseFloat(((minutos - 30) * valorMin * 1.1).toFixed(2)));
    }
    if (planoEscolhido === "FaleMais 60" && minutos <= 60) {
      setPreco(parseFloat(0).toFixed(2));
    }
    if (planoEscolhido === "FaleMais 60" && minutos > 60) {
      setPreco(parseFloat(((minutos - 60) * valorMin * 1.1).toFixed(2)));
    }
    if (planoEscolhido === "FaleMais 120" && minutos <= 120) {
      setPreco(parseFloat(0).toFixed(2));
    }
    if (planoEscolhido === "FaleMais 120" && minutos > 120) {
      setPreco(parseFloat(((minutos - 120) * valorMin * 1.1).toFixed(2)));
    } else {
      setPrecoSemPlano((minutos * valorMin).toFixed(2));
    }
  }, [planoEscolhido, minutos, valorMin]);

  return (
    <>
      <div className="form-div">
        <SelectOrigem originUpdateFn={updateOrigem} origin={origem} />
        <SelectDestino
          destinyUpdateFn={updateDestino}
          destiny={destino}
          originDDD={origem}
        />
      </div>
      <div className="plano-minutos">
        <PlanoFaleMais
          planUpdateFn={updatePlanoEscolhido}
          planoEscolhido={planoEscolhido}
        />
        <MinutosPorMes minutesUpdateFn={updateMinutos} />
      </div>
      <div id="resultado">
        <div className="preco-com-plano" data-testid="preco-com-plano">
          {" "}
          Com o plano escolhido, por mês:
          <p>
            <br />
            {preco}
          </p>
        </div>
        <div className="preco-sem-plano" data-testid="preco-sem-plano">
          Valor sem nosso maravilhoso plano:{" "}
          <p>
            <br />
            {precoSemPlano}
          </p>
        </div>
      </div>
    </>
  );
};

export default Simulacao;
