import './index.scss';

import { useState } from 'react'

export default function VariavelEstado() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resposta, setResposta] = useState(0);

  const [contador, setContador] = useState(1);
  
  //let contador = 1;

  function incrementar() {
    //contador = contador + 1;
    //alert(contador);
    setContador(contador + 1);
  }


  function somar() {
    let x = n1 + n2;
    setResposta(x);
  }


  function adicionarTarefa() {
    setListaTarefas([...listaTarefas, novaTarefa]);
    setNovaTarefa('');
  }
  

  return (
    <div className='pagina-variavel-estado'>
      <h1> Variável de Estado </h1>
      <hr />

      <h2> Contador </h2>
      <div> {contador} </div>
      <button onClick={incrementar}> Incrementar </button>
      
      <hr />

      <h2> Calculadora </h2>
      <div className='calc'>
        <div>
          <label>Número 01:</label>
          <input type='text' value={n1} onChange={(e) => setN1(Number(e.target.value))} />
        </div>
        <div>
          <label>Número 02:</label>
          <input type='text' value={n2} onChange={(e) => setN2(Number(e.target.value))}/>
        </div>
        <div>
          {resposta}
        </div>
        <div>
          <button onClick={somar}> Somar </button>
        </div>

      </div>

      <hr />

      <h2> Lista de Tarefas </h2>
      <input type='text' placeholder='Informe a tarefa' value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} /> &nbsp; 
      <button onClick={adicionarTarefa}> Adicionar Tarefa</button>

      <ul>
        {listaTarefas.map(item =>
          <li>
            {item} &nbsp;
            <i className='fa fa-trash'></i>
          </li>  
        )}
      </ul>


    </div>
  )
}