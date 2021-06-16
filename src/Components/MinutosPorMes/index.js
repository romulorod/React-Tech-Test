import React from 'react'
import {Input} from './styles'
import { MinutosMes } from './styles'

const MinutosPorMes = ({ minutesUpdateFn }) => {

    return (
        <MinutosMes>
            Quantos minutos você utiliza por mês ? 
            <label>
                <Input type="text" onChange={minutesUpdateFn} className="minutosMes" />
            </label>
        </MinutosMes>
    )
}
export default MinutosPorMes