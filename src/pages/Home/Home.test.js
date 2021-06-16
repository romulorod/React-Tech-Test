import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Home from "./index";

describe("Home Tests", () => {
  it("Should render the Home Page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const Telzacional = screen.getByAltText("Woman-on-Phone");

    expect(Telzacional).toBeInTheDocument();
  });

  it("Should contain a button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const BotaoComLink = screen.getByRole("button");

    expect(BotaoComLink).toBeInTheDocument();
  });
});
