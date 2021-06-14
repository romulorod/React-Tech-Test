import React from 'react'
import {Select} from './styles'
    const SelectOrigem = ({ o,origem }) => {

        return (
            <form>
                <label htmlFor='dddOrigem'>Escolha o DDD de origem: </label>
                <Select id='origemDDD' name="dddO" value={origem} onChange={o}>
                    <option defaultValue value />
                    <option id="origem011" value='011'>011</option>
                    <option id="origem016" value='016'>016</option>
                    <option id="origem017" value="017">017</option>
                    <option id="origem018" value="018">018</option>
                </Select>
            </form>
        )

    }

    export default SelectOrigem