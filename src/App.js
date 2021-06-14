import React, { useState } from 'react'
import './App.css'
import SelectOrigem from './Components/Select/SelectOrigem'
import SelectDestino from './Components/Select/SelectDestino'
import MinutosPorMes from './Components/MinutosPorMes/MinutosPorMes'
import PlanoFaleMais from './Components/PlanoFaleMais/PlanoFaleMais'
import { useEffect } from 'react'


const App = () => {
  const [price, setPrice] = useState((0).toFixed(2))
  const [minutos, setMinutos] = useState(0)
  const [origem, setOrigem] = useState('')
  const [destino, setDestino] = useState('')
  const [planoEscolhido, setPlanoEscolhido] = useState('')
  const [valorMin, setValorMin] = useState(0)
  const [precoSemPlano, setPrecoSemPlano] = useState((0).toFixed(2))
  function updateOrigem(e) {
    setOrigem(e.target.value)
  }

  function updateDestino(e) {
    setDestino(e.target.value)
  }

  useEffect(() => {
    if(destino==='016'){
    setValorMin(1.9)
  }
    if(destino==='017'){
    setValorMin(1.7)
    }
    if(destino==='018'){
    setValorMin(0.9)
    }
    if(origem==='016'){
    setValorMin(2.9)
    }
    if(origem==='017'){
    setValorMin(2.7)
    }
    if(origem==='018'){
    setValorMin(1.9)
    }
  },[destino,origem]);

  function updatePlanoEscolhido(e) {
    setPlanoEscolhido(e.target.value)
  }

  function updateMinutos(e) {
    setMinutos(e.target.value)
  }

useEffect (() => {
  if(planoEscolhido==='') return
  if(planoEscolhido==='FaleMais 30' || planoEscolhido==='FaleMais 60' || planoEscolhido==='FaleMais 120'){
    setPrice(parseFloat(0).toFixed(2)) 
  }
  if(planoEscolhido==='FaleMais 30' && minutos <=30){
    setPrice(parseFloat(0).toFixed(2))  
  }
  if(planoEscolhido==='FaleMais 30' && minutos >30){
    setPrice(parseFloat(((minutos-30)*valorMin*1.1).toFixed(2))) 
  }
  if(planoEscolhido==='FaleMais 60' && minutos <=60){
    setPrice(parseFloat(0).toFixed(2)) 
  }
  if(planoEscolhido==='FaleMais 60' && minutos >60){
    setPrice(parseFloat(((minutos-60)*valorMin*1.1).toFixed(2))) 
  }
  if(planoEscolhido==='FaleMais 120' && minutos <=120){
    setPrice(parseFloat(0).toFixed(2)) 
  }
  if(planoEscolhido==='FaleMais 120' && minutos >120){
    setPrice(parseFloat(((minutos-120)*valorMin*1.1).toFixed(2))) 
  }
  if(minutos ==='0'){
    return
  }else{
    setPrecoSemPlano((minutos*valorMin).toFixed(2))
  }
},[planoEscolhido, minutos, valorMin])

  return (
    <>
    <div className="form-div">
      <SelectOrigem o={updateOrigem} origem={origem} />
      <SelectDestino d={updateDestino} destino={destino} dddOrigem={origem}/>
      </div>
      <div className="plano-minutos">
     <PlanoFaleMais plano={updatePlanoEscolhido} planoEscolhido={planoEscolhido} />
     <MinutosPorMes f={updateMinutos} />
     </div>
      <div id="resultado">
      <div className="preco-com-plano"> Com o plano escolhido, por mês:<p><br />{price}</p></div> 
      <div className="preco-sem-plano">Valor sem nosso maravilhoso plano: <p><br />{precoSemPlano}</p></div>
      </div>
    </>
  )

}

export default App