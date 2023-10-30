import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import './index.scss';



export default function Componentes() {


  return (
    <div className='pagina-componentes'>
      <Cabecalho />

      <h1> Estudo de Componentes </h1>

      
      <h2> Contador </h2>
      <div className='contadores'>
        <Contador titulo="Passos" inicio={5} />
        <Contador titulo="Visitas" />
      </div>

    </div>
  )
}