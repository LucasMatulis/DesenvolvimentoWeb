import './index.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';

export default function App() {


  return (
    <div className="pagina-app">
      <Cabecalho />
      
      <h1 className='titulo'> Seja bem-vindo(a) ao ReactJS</h1>

      <hr />

      <nav>
        <Link to='/contato'> Contato </Link>
        <Link to='/sobre'> Sobre </Link>
        <Link to='/eventos'> Eventos </Link>
        <Link to='/variavelestado'> Variável de Estado </Link>
      </nav>

    </div>
  );

}


