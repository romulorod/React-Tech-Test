import { render,screen } from "@testing-library/react";
import React from 'react'
import Home from "./Home";

describe('Home Tests',() => {
    it("Should contain a button", () =>{
        render(<Home />)
        const BotaoComLink = screen.getByRole('button')
    
        expect(BotaoComLink).toBeInTheDocument()
    })
  
})
