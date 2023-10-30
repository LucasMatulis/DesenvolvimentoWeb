
import { useState } from 'react';
import './index.scss';

import axios from 'axios';


export default function CadastroFilme() {
  const [nome, setNome] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [avalicao, setAvaliacao] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [disponivel, setDisponivel] = useState(false);


  async function salvarFilme() {
    let body = {
      nome: nome,
      sinopse: sinopse,
      lancamento: lancamento,
      avaliacao: avalicao,
      disponivel: disponivel
    }

    let r = await axios.post('http://localhost:5000/filme/', body);
    let id = r.data.id;

    alert('Filme cadastrado. Id ' + id);

  }


  return (
    <div className='pagina-filmes-cadastro'>
      <h1> Cadastro Filme </h1>

      <div className='form'>

        <div>
          <label>Nome: </label>
          <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
        </div>

        <div>
          <label>Sinopse: </label>
          <input type='text' value={sinopse} onChange={e => setSinopse(e.target.value)} />
        </div>

        <div>
          <label>Avaliação: </label>
          <input type='text' value={avalicao} onChange={e => setAvaliacao(e.target.value)} />
        </div>

        <div>
          <label>Lancamento: </label>
          <input type='date' value={lancamento} onChange={e => setLancamento(e.target.value)} />
        </div>

        <div>
          <label>Disponível: </label>
          <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)} /> Sim
        </div>

        <div>
          <button onClick={salvarFilme}> Cadastrar </button>
        </div>

      </div>
    </div>
  )
}