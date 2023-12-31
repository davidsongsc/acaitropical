import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../visual/navbarEstilo.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { LuBookOpenCheck, LuStore, LuUsers2 } from 'react-icons/lu';
import Login from './Login';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Carrinho, Cliente, Produto } from '../../redux/types';

const Navbar: React.FC = () => {
  const clientes = useSelector((state: RootState) => state.cliente.clientes);
  const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);
  const mediaSocialAtributos = [20, 'fff'];
  const visualIcone = { margin: '5px' };
  const [totalCarrinho, setTotalCarrinho] = useState<number>(0);

  const tamanhoIcone = 40;
  const [loginVisivel, setLoginVisivel] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    setTotalCarrinho((prevTotal) => {
      const newTotal = clienteFiltrado?.pedido?.carrinho.reduce((total: number, carrinho: Carrinho) => {
        return (
          total +
          carrinho.produtos.reduce((subtotal: number, [produto, quantidade]: [Produto, number]) => {
            return subtotal + quantidade;
          }, 0)
        );
      }, 0) || 0;

      return newTotal;
    });
  }, [clienteFiltrado]);

  const handleLoginStatus = () => {
    setLoginVisivel(!loginVisivel);
    scrollToTop();

  }
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
        <Link to='/'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/548/277/original/watercolor-berry-acai-png.png"
            alt="açai"
            width={'50px'}
          />
        </Link>
        <div className='geral-container-pagina-pdiv'>
          <ul className='listaSocialCliente'>
            <li style={{ display: loginVisivel ? 'none' : '' }}>
              <Link to='/delivery'>Delivery</Link>
            </li>

            <li style={{ display: loginVisivel ? 'none' : '' }}>
              <Link to='/catalogo'>Catalogo</Link>
            </li>


            <li style={{ display: loginVisivel ? 'none' : '' }}>
              <Link to='/'>

                <>
                  conta
                </>

              </Link>
            </li>
            <li onClick={() => handleLoginStatus()} style={{ textDecoration: loginVisivel ? 'underline overline' : 'none' }}>
              <Link to='/'>

                <>

                  Login
                </>

              </Link>
            </li>
            <li style={{ display: loginVisivel ? 'none' : '' }}>
              <Link to='/conta'><FiShoppingCart size={22} />
                {totalCarrinho}</Link>
            </li>

          </ul>

        </div>


        <div className='redes-sociais-links'>
          <FaFacebook size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />
          <FaInstagram size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />
          <FaTiktok size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

        </div>
      </div>

      <div className='login-visual-container' style={{ display: loginVisivel ? '' : 'none' }}>
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
