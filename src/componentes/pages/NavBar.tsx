import React from 'react';
import { Link } from 'react-router-dom';
import '../visual/navbarEstilo.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { LuHome, LuBookOpenCheck, LuStore, LuUsers2 } from "react-icons/lu";

const Navbar: React.FC = () => {
  const mediaSocialAtributos = [20, 'fff'];
  const visualIcone = { margin: '5px' };
  const tamanhoIcone = 40;
  return (
    <div className='geral-container-pagina'>
      <div className='medias-sociais-container'>
        <h2> Medias Sociais</h2>
        <FaFacebook size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

        <FaInstagram size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

        <FaTiktok size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

      </div>
      <div className='tituli-principal-container'>
        <div>
          <h1> Carioca Tropical</h1>

        </div>


      </div>



      <nav>

        <ul>
          <Link to="/cardapio">
            <li>
              <LuBookOpenCheck size={tamanhoIcone} />
              <strong>
                Cardapio
              </strong>
            </li>
          </Link>
          <Link to="/">
            <li>
              <LuStore size={tamanhoIcone} />
              <strong>
                Pedidos
              </strong>
            </li>
          </Link>
          <Link to="/">
            <li>
              <LuUsers2 size={tamanhoIcone} />
              <strong>
                SAC
              </strong>
            </li>
          </Link>
        </ul>

      </nav>

    </div>
  );
};

export default Navbar;
