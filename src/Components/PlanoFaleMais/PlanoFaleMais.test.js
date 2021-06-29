import { render, screen } from "@testing-library/react";
import React from 'react'
import PlanoFaleMais from "./";

describe('SelectOrigem Form Tests', () => {
    it("Should contain a form", () => {
        render(<PlanoFaleMais />)
        const Label = screen.getByTestId('label-plan')

        expect(Label).toHaveClass('label-plan')
    })
    it("Should contain options", () => {
        render(<PlanoFaleMais />)
        const Select = screen.getByTestId('select-plan')

        expect(Select).toContainElement(Select)
    })
})