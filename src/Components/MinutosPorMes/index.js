import React from 'react'
import {Input} from './styles'
import { MinutesMonth } from './styles'

const MinutosPorMes = ({ minutesUpdateFn }) => {

    return (
        <MinutesMonth>
            Quantos minutos você utiliza por mês ? 
            <label data-testid="input-minutes-month">
                <Input type="text" onChange={minutesUpdateFn} className="minutesMonth" />
            </label>
        </MinutesMonth>
    )
}
export default MinutosPorMes