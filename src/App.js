import React, { useState } from 'react'
import Card from './Card'
import './App.css'



const App = () => {
  

  return (
<>
 
      <Card />
        </>
      /* {pokemonData.map((data) => {
        return (
          <div className="container">
            <img alt="Pokemon" src= {data.sprites['front_default'] }/>
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {""}
                    {Math.round(data.height)}</div></div>

                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">{""}{Math.round(data.weight)}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Number of Battles</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>

              </div>
            </div>
          </div>
        )
      })} */
  )
    }

export default App