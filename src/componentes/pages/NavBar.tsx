import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../visual/navbarEstilo.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { LuBookOpenCheck, LuStore, LuUsers2 } from 'react-icons/lu';

const Navbar: React.FC = () => {
  const mediaSocialAtributos = [20, 'fff'];
  const visualIcone = { margin: '5px' };
  const tamanhoIcone = 40;
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsFixed(scrollY > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="geral-container-pagina">
      <div className={`sociais-container ${isFixed ? 'fixed' : ''}`}>
        <Link to='/'>Inicio
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/548/277/original/watercolor-berry-acai-png.png"
            alt="açai"
            width={'50px'}
          />
        </Link>
        <div className='geral-container-pagina-pdiv'>
          <ul className='listaSocialCliente'>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/cardapio'>Cardápio</Link>
            </li>
            <li>
              <Link to='/'>Meu Pedido</Link>
            </li>
            <li>
              <Link to='/'>Promoções</Link>
            </li>
          </ul>

        </div>

        <h2> Area ara login!</h2>
        <div className='redes-sociais-links'>
          <FaFacebook size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />
          <FaInstagram size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />
          <FaTiktok size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

        </div>
      </div>

      <nav
        style={{
          marginTop: isFixed ? '-30px' : '-106px',  // LOGIN STATUS, USUARIO LOGADO DEVE MOSTRAR O CONTEUDO 
        }}                                         // USUARIO
      >
        <ul>
          <Link to="/cardapio" onClick={scrollToTop}>
            <li>
              <LuBookOpenCheck size={tamanhoIcone} />
              <strong>Cardapio</strong>
            </li>
          </Link>
          <Link to="/" onClick={scrollToTop}>
            <li>
              <LuStore size={tamanhoIcone} />
              <strong>Pedidos</strong>
            </li>
          </Link>
          <Link to="/" onClick={scrollToTop}>
            <li>
              <LuUsers2 size={tamanhoIcone} />
              <strong>SAC</strong>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
