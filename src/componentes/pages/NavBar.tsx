import React from 'react';
import { Link } from 'react-router-dom';
import '../visual/navbarEstilo.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { LuBookOpen, LuBookOpenCheck, LuStore, LuUsers2 } from "react-icons/lu";



const Navbar: React.FC = () => {
  const mediaSocialAtributos = [20, '414141'];
  const visualIcone = { margin: '5px' };
  return (
    <header>

      <div className='tituli-principal-container'>
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/016/548/277/original/watercolor-berry-acai-png.png" alt="Açai produto" width={'75px'} />
          <h1> Carioca Tropical</h1>
        </div>

        <img src="https://static.wixstatic.com/media/b790c5_623a60535d9649629c4e510d64b5439e~mv2.png/v1/fill/w_560,h_392,al_c,q_85,enc_auto/acai-fit.png" alt="Açai Fruta" width={'320px'} />
      </div>

      <div className='medias-sociais-container'>
        <h1> Medias Sociais</h1>
        <FaFacebook size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

        <FaInstagram size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

        <FaTiktok size={mediaSocialAtributos[0]} color={mediaSocialAtributos[1] as string} style={visualIcone} />

      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">
              <LuBookOpen />
              <strong>Inicio</strong>
            </Link>
          </li>
          <li>
            <Link to="/cardapio">
              <LuBookOpenCheck />
              <strong>Cardapio</strong>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LuStore />
              <strong>Loja</strong>
            </Link>
          </li>
          <li>

            <Link to="/">
              <LuUsers2 /><strong>
                SAC
              </strong></Link>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;
