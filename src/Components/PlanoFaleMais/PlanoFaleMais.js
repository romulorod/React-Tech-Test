import React from 'react'

const PlanoFaleMais = ({plano, planoEscolhido}) => {
    return(
<>
        <label>Escolha seu Plano FaleMais: </label>
        <select value={planoEscolhido} onChange={plano}>
        <option defaultValue value />
        <option id="FaleMais30">FaleMais30</option>
        <option id="FaleMais60">FaleMais60</option>
        <option id="FaleMais120">FaleMais120</option>
        </select>
</>
    )

}
export default PlanoFaleMais