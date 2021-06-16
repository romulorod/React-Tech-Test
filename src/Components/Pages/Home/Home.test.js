import { render, screen } from "@testing-library/react";
import React from 'react'
import Home from "./";
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Simulacao from '../Simulacao/Simulacao'
import LocationDisplay from '../Simulacao/Simulacao'

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
    it("Should Route you to /simulacao", () => {
        const history = createMemoryHistory()
        const route = '/simulacao'
        history.push(route)
        render(
          <Router history={history}>
            <LocationDisplay />
          </Router>
        )
      
        expect(screen.getByTestId('location-display')).toHaveTextContent(route)
      })
    })