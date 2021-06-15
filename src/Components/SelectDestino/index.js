import React from 'react'


const SelectDestino = ({ destinyUpdateFn, destiny, originDDD}) => {

    return (
        <div className="destino">
        <form>
            <label htmlFor='dddDestino'>Escolha o DDD de destino: </label>
            <select id='destinoDDD' name="ddddestino" value={destiny} onChange={destinyUpdateFn}>
                <option defaultValue value />
                {
                originDDD === '011' && <>
                    <option id="destino016" hidden="" value="016" >016</option>
                    <option id="destino017" hidden="" value="017" >017</option>
                    <option id="destino018" hidden="" value="018" >018</option></>}

                {originDDD === '016' && <>
                    <option id="destino011" hidden="" value='011' >011</option> </>
                }

                {originDDD === '017' && <>
                    <option id="destino011" hidden="" value='011' >011</option> </>
                }

                {originDDD === '018' && <>
                    <option id="destino011" hidden="" value='011' >011</option> </>
                }
            </select>
        </form>
        </div>
    )
}


export default SelectDestino