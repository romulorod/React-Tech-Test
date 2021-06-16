import { render, screen } from "@testing-library/react";
import React from 'react'
import SelectDestino from ".";

describe('SelectOrigem Form Tests', () => {
    it("Should contain a form", () => {
        render(<SelectDestino />)
        const Form = screen.getByTestId('form-destino')

        expect(Form).toHaveClass('form-destino')
    })
    it("Should contain options", () => {
        render(<SelectDestino />)
        const Select = screen.getByTestId('select-destino')

        expect(Select).toContainElement(Select)
    })
})