import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';

import Home from "./pages/Home/Home";
import Shorts from "./pages/Shorts/Shorts";
import Inscriçoes from "./pages/Inscriçoes/Inscriçoes";
import Biblioteca from "./pages/Biblioteca/Biblioteca";
import Historico from "./pages/Historico/Historico";
import Login from "./pages/Login/Login";
import PasswordPage from "./pages/Login/Senha";
import Cadastro from "./pages/Login/Cagastro";



function App() {
  const { Aberto, Header,headerconponent,Menu,menuconponent} = useContext(UserContext);
  
  
  return (

   

    <BrowserRouter>
      <div className="App">
       { headerconponent && <Header />}

        <div style={{ width: '100%', display: 'flex' }}>
        { menuconponent && <Menu Aberto={Aberto} />}
          
          <div style={{ width: '100%', padding: '30px 20px', boxSizing: 'border-box', }}>
            <Routes>
              <Route path='/' element={<Home  />}  />
              <Route path='/shorts' element={<Shorts />} />
              <Route path='/inscriçoes' element={<Inscriçoes />} />
              <Route path='/biblioteca' element={<Biblioteca />} />
              <Route path='/histiorico' element={<Historico />} />
              <Route path='/login' element={<Login />} />
              <Route path='/senha' element={<PasswordPage/>} />
              <Route path='/cadastro' element={<Cadastro/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

  
export default App;
