import React, { useState } from 'react'
import axios from 'axios'
import { render } from 'react-dom'


function Card() {

    async function ApiData() {

        const toArray = []

        const [pokemon, setPokemon] = useState('' || 0)
        const [pokemonData, setPokemonData] = useState([])
        const [pokemonType, setPokemonType] = useState("")

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${9}`
            const res = await axios.get(url)
            toArray.push(res.data)
            setPokemonType(res.data.types[0].type.name)
            setPokemonData(toArray)
        } catch (e) {
            console.log(e)
        }



        pokemonData.map((data) => {
            return (
                <div>
                    <img src={data.sprites['front_default']} />
                </div>
            )
        })
} ApiData()
}


export default Card