import React from 'react'
import {Input} from './styles'

const MinutosPorMes = ({ f }) => {

    return (
        <div>
            Quantos minutos você utiliza por mês ? 
            <label>
                <Input type="text" onChange={f} className="minutosMes" />
            </label>
        </div>
    )
}
export default MinutosPorMes