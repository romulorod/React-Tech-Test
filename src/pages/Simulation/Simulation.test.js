import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Simulation from ".";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";

describe("Simulation Form Tests", () => {
  it("full app rendering with router", () => {
    const history = createMemoryHistory();
    render(
      <MemoryRouter history={history}>
        <Simulation />
      </MemoryRouter>
    );
  });

  it("Functionality ddd x to y test", () => {
    const optionDDD11 = 1;
    const optionPlanoFale30 = 1;

    const { getByTestId } = render(
      <MemoryRouter>
        <Simulation />
      </MemoryRouter>
    );

    fireEvent.change(getByTestId("select-origin"), {
      target: { value: optionDDD11 },
    });
    fireEvent.change(getByTestId("select-destiny"), {
      target: { value: optionDDD11 },
    });
    fireEvent.change(getByTestId("select-plan"), {
      target: { value: optionPlanoFale30 },
    });
    fireEvent.change((getByTestId("input-minutes-month").querySelector('input')), {
      target: { value: "30" },
    });

    const valorComPlano = getByTestId("price-include-plan");
    const valorSemPlano = getByTestId("price-exclude-plan");

    expect(valorComPlano).toHaveTextContent("Com o plano escolhido, por mês:0.00");
    expect(valorSemPlano).toHaveTextContent("Valor sem nosso maravilhoso plano: 0.00");
  });
});
