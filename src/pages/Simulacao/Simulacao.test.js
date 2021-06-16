import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Simulacao from "./";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";

describe("Simulacao Form Tests", () => {
  it("full app rendering with router", () => {
    const history = createMemoryHistory();
    render(
      <MemoryRouter history={history}>
        <Simulacao />
      </MemoryRouter>
    );
  });

  it("teste da funcionalidade ddd x para y", () => {
    const optionDDD11 = 1;
    const optionPlanoFale30 = 1;

    const { getByTestId } = render(
      <MemoryRouter>
        <Simulacao />
      </MemoryRouter>
    );

    fireEvent.change(getByTestId("select-origin"), {
      target: { value: optionDDD11 },
    });
    fireEvent.change(getByTestId("select-destino"), {
      target: { value: optionDDD11 },
    });
    fireEvent.change(getByTestId("select-plano"), {
      target: { value: optionPlanoFale30 },
    });
    fireEvent.change((getByTestId("input-minutos-por-mes").querySelector('input')), {
      target: { value: "30" },
    });

    const valorComPlano = getByTestId("preco-com-plano");
    const valorSemPlano = getByTestId("preco-sem-plano");

    expect(valorComPlano).toHaveTextContent("Com o plano escolhido, por mês:0.00");
    expect(valorSemPlano).toHaveTextContent("Valor sem nosso maravilhoso plano: 0.00");
  });
});
