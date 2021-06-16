import { render, screen } from "@testing-library/react";
import React from 'react'
import PlanoFaleMais from ".";

describe('SelectOrigem Form Tests', () => {
    it("Should contain a form", () => {
        render(<PlanoFaleMais />)
        const Label = screen.getByTestId('label')

        expect(Label).toHaveClass('label')
    })
    it("Should contain options", () => {
        render(<PlanoFaleMais />)
        const Select = screen.getByTestId('select')

        expect(Select).toContainElement(Select)
    })
})