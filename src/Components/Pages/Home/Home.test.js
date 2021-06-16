import { render, screen } from "@testing-library/react";
import React from 'react'
import Home from "./";


describe('Home Tests', () => {
    it('Should render the Home Page', () => {
        render(<Home />)
        const Telzacional = screen.getByAltText('Woman-on-Phone')

        expect(Telzacional).toBeInTheDocument()
      })

    it("Should contain a button", () => {
        render(<Home />)
        const BotaoComLink = screen.getByRole('button')

        expect(BotaoComLink).toBeInTheDocument()
    })
    })