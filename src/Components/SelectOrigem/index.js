import React from 'react'

    const SelectOrigem = ({ o,origem }) => {

        return (
            <div className="origem">
            <form data-testid="form" className="form">
                <label htmlFor='dddOrigem'>Escolha o DDD de origem: </label>
                <select id='origemDDD'  data-testid="select" name="dddO" value={origem} onChange={o}>
                    <option defaultValue value />
                    <option id="origem011" value='011'>011</option>
                    <option id="origem016" value='016'>016</option>
                    <option id="origem017" value="017">017</option>
                    <option id="origem018" value="018">018</option>
                </select>
            </form>
            </div>
        )

    }

    export default SelectOrigem