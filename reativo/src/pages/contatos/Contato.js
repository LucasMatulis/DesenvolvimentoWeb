import './Contato.scss';

import { Link } from 'react-router-dom';


export default function Contato() {


  return (
    <section className='pagina-contato'>
      <h1 className='titulo'>
        <i className='fa fa-heart'></i>
        Contato
      </h1>

      <hr />

      <Link to='/'> Voltar Home</Link>

    </section>
  )
}