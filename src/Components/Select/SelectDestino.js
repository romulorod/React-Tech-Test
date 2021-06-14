import React from 'react'


const SelectDestino = ({ d, destino, dddOrigem}) => {

    return (
        <form>
            <label htmlFor='dddDestino'>Escolha o DDD de destino: </label>
            <select id='destinoDDD' name="ddddestino" value={destino} onChange={d}>
                <option defaultValue value />
                {
                dddOrigem === '011' && <>
                    <option id="destino016" hidden="" value="016" >016</option>
                    <option id="destino017" hidden="" value="017" >017</option>
                    <option id="destino018" hidden="" value="018" >018</option></>}

                {dddOrigem === '016' && <>
                    <option id="destino011" hidden="" value='011' >011</option> </>
                }

                {dddOrigem === '017' && <>
                    <option id="destino011" hidden="" value='011' >011</option> </>
                }

                {dddOrigem === '018' && <>
                    <option id="destino011" hidden="" value='011' >011</option> </>
                }
            </select>
        </form>
    )
}


export default SelectDestino