import './index.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';



export default function Contato() {


  return (
    <section className='pagina-contato'>
      <Cabecalho />

      <h1 className='titulo'>
        <i className='fa fa-heart'></i>
        Contato
      </h1>

      <img src="/assets/images/contato.png" />

      <hr />

      <Link to='/'> Voltar Home</Link>

    </section>
  )
}