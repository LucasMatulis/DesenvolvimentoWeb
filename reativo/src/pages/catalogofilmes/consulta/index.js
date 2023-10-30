import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import ItemFilme from '../../../components/itemFilme';


export default function ConsultarFilme() {
  const [listaFilmes, setListaFilmes] = useState([]);

  async function buscarFilmes() {
    let r = await axios.get('http://localhost:5000/filme');
    let filmes = r.data;

    setListaFilmes(filmes);
  }

  async function removerFilme(id) {
    let r = await axios.delete('http://localhost:5000/filme/' + id);
    alert('Filme apagado!');
    buscarFilmes();
  }


  useEffect(() => {
    
    buscarFilmes();

  }, []) // quando a tela carregar



  return (
    <div className='pagina-filmes-cadastro'>
      <h1> Consultar Filme </h1>
      {/* <button onClick={buscarFilmes}> Listar Filmes </button> */}

      

      
      {/* 
        * COM COMPONENTE 
        * 
      */}
      <div className='lista-filmes'>

        {listaFilmes.map(item => 
          <ItemFilme
            titulo={item.nome}
            lancamento={item.lancamento}
            avaliacao={item.avaliacao}
            disponivel={item.disponivel}
            remover={() => removerFilme(item.id)}
          />  
        )}

      </div>

      

      
      {/* 
        * COM TABELA 
        * 
      */}

      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Avaliação</th>
            <th>Lançamento</th>
            <th>Disponível</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listaFilmes.map(item =>
            <tr>
              <td>{item.id}</td>
              <td>{item.nome ?? '--'}</td>
              <td>{item.avaliacao}</td>
              <td>{item.lancamento.substr(0, 10)}</td>
              <td>{item.disponivel == 1 ? 'Sim' : 'Não'}</td>
              <td>
                <button onClick={() => removerFilme(item.id)}> Excluir </button>
              </td>
            </tr>  
          )}
        </tbody>
      </table> */}




      
    </div>
  )
}