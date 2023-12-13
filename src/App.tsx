import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/pages/NavBar';
import Home from './componentes/pages/Home';
import CardapioPrincipal from './componentes/pages/Cardapio';

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
      </Routes>
    </Router>
  );
};

export default App;
