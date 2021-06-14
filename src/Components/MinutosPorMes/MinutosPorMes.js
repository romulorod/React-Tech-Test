import React from 'react'

const MinutosPorMes = ({ f }) => {

    return (
        <div>
            Quantos minutos você utiliza por mês ? 
            <label>
                <input type="text" onChange={f} className="minutosMes" />
            </label>
        </div>
    )
}
export default MinutosPorMes