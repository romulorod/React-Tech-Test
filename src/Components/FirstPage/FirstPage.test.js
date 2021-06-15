import { render,screen } from "@testing-library/react";
import React from 'react'
import FirstPage from "./FirstPage";

describe('FirstPage Tests',() => {
    it("Should contain a button", () =>{
        render(<FirstPage />)
        const BotaoComLink = screen.getByRole('button')
    
        expect(BotaoComLink).toBeInTheDocument()
    })
  
})
