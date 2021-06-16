import { render, screen } from "@testing-library/react";
import React from 'react'
import Simulacao from '../Simulacao/Simulacao'
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'


describe('Simulacao Form Tests', () => {
    it('full app rendering with router', () => {
        const history = createMemoryHistory()
        render(
          <Router history={history}>
            <Simulacao />
          </Router>
        )})
    })


    