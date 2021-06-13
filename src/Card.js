import React, { useState } from 'react'
import axios from 'axios'

function Card() {

    const toArray = []
    const [pokemonData, setPokemonData] = useState([])

    const api = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/1`
        const res = axios.get(url)
        toArray.push(res.data)
        setPokemonData(toArray)
    }
    api()
    return (

            pokemonData.map((data) => {
                return (
                    <section>{data.Form}</section>
                )


        }
        )
    )
}
export default Card