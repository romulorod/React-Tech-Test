import { render, screen } from "@testing-library/react";
import React from 'react'
import SelectOrigin from ".";

describe('SelectOrigin Form Tests', () => {
    it("Should contain a form", () => {
        render(<SelectOrigin />)
        const Form = screen.getByTestId('form-origin')

        expect(Form).toHaveClass('form-origin')
    })
    it("Should contain options", () => {
        render(<SelectOrigin />)
        const Select = screen.getByTestId('select-origin')

        expect(Select).toHaveTextContent('011','016','017','018')
    })
})