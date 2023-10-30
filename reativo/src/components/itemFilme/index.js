
import './index.scss';


export default function ItemFilme(props) {

  function remover() {
    props.remover();
  }

  return (
    <div className='comp-item-filme'>
      <img src='/assets/images/bg-filme.jpg' />
      <div>
        <h2> {props.titulo ?? '<Sem nome>'}</h2>
        
        <h3>
          <span>Lançamento:</span>
          {new Date(props.lancamento).toLocaleDateString()}
        </h3>

        <h3>
          <span>Avaliação:</span>
          {props.avaliacao}
        </h3>

        <h3>
          <span>Disponível:</span>
          {props.disponivel ? 'Sim' : 'Não'}
        </h3>

        <div>
          <button onClick={remover}> Deletar </button>
        </div>

      </div>
    </div>
  )
}