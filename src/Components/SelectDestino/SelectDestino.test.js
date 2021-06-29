import { render, screen } from "@testing-library/react";
import React from 'react'
import SelectDestiny from ".";

describe('SelectOrigem Form Tests', () => {
    it("Should contain a form", () => {
        render(<SelectDestiny />)
        const Form = screen.getByTestId('form-destiny')

        expect(Form).toHaveClass('form-destiny')
    })
    it("Should contain options", () => {
        render(<SelectDestiny />)
        const Select = screen.getByTestId('select-destiny')

        expect(Select).toContainElement(Select)
    })
})