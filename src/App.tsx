import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/pages/NavBar';
import CardapioPrincipal from './componentes/pages/Cardapio';
import CarrinhoComprasLista from './componentes/pages/CarrinhoComprars';
import './componentes/visual/baseFonts.css'
import Home from './componentes/pages/Home';
const App: React.FC = () => {
  return (

    <Router>
      <Navbar />
     
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cardapio"
          element={<CardapioPrincipal />}
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
