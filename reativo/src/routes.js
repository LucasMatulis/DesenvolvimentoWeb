import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/home';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import NaoEncontrado from './pages/naoencontrado';
import VariavelEstado from './pages/variavelestado';
import Eventos from './pages/eventos';
import Componentes from './pages/componentes';

import CadastroFilme from './pages/catalogofilmes/cadastro';
import ConsultarFilme from './pages/catalogofilmes/consulta';

export default function Navegacao() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/variavelestado' element={<VariavelEstado />} />
        <Route path='/componentes' element={<Componentes />} />

        <Route path='/filme/cadastro' element={<CadastroFilme />} />
        <Route path='/filme/consultar' element={<ConsultarFilme />} />
        

        <Route path='/*' element={<NaoEncontrado />} />
        
      </Routes>
    </BrowserRouter>
  )
}