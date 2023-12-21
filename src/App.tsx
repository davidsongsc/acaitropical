import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/pages/NavBar';
import CardapioPrincipal from './componentes/pages/Cardapio';
import CarrinhoComprasLista from './componentes/pages/CarrinhoComprars';
import './componentes/visual/baseFonts.css'
import Conta from './componentes/pages/Conta';
import CatalogoCompomente from './componentes/pages/Catalogo';
const App: React.FC = () => {
  return (

    <Router>
      <Navbar />
     
      <Routes>
        <Route
          path="/catalogo"
          element={<CatalogoCompomente />}
        />
        <Route
          path="/delivery"
          element={<CardapioPrincipal />}
        />
         <Route
          path="/conta"
          element={<Conta />}
        />
        <Route
          path="/cardapio/:tipo"
          element={<CardapioPrincipal />}
        />
      </Routes>

      <CarrinhoComprasLista />
    </Router>

  );
};

export default App;
