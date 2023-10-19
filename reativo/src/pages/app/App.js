import './App.scss';

import { Link } from 'react-router-dom';

export default function App() {


  return (
    <div className="pagina-app">
      <h1 className='titulo'> Seja bem-vindo(a) ao ReactJS</h1>

      <hr />

      <nav>
        <Link to='/contato'> Contato </Link>
        <Link to='/sobre'> Sobre </Link>
      </nav>

    </div>
  );

}
