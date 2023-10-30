import { useState } from 'react';
import './index.scss';


export default function Contador(props) {

  const [contador, setContador] = useState(props.inicio ?? 0);
  

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }


  return (
    <div className='comp-contador'>
      <h3> {props.titulo} </h3>
      <button onClick={incrementar}> + </button>
      <h3> {contador} </h3>
      <button onClick={decrementar}> - </button>
    </div>
  )
}