import React, { useState, useEffect } from 'react';
import '../visual/cardapioEstilo.css';
import GaleriaDeProdutos from './GaleriaProdutos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setTipoDesejado } from '../../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';

const CardapioPrincipal: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const { tipo: tipoFromParams } = useParams();
  const dispatch = useDispatch();

  // Usar um estado local para garantir que a mudança no tipo seja refletida imediatamente
  const [tipoSelecionado, setTipoSelecionado] = useState(tipoFromParams || '');

  useEffect(() => {
    // Atualizar o estado local quando o tipo na URL mudar
    setTipoSelecionado(tipoFromParams || '');
  }, [tipoFromParams]);

  const listaItensCardapio = [
    ['Açai', 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-acai-bowl-vector-png-image_6891778.png'],
    ['Biscoitos', 'https://cdn-icons-png.flaticon.com/512/1868/1868775.png'],
    ['Doces', 'https://images.vexels.com/media/users/3/268856/isolated/preview/9f4fb6c71e1ad36d551ab6526eab362b-comida-de-cupcake-de-doces.png'],
    ['Salgados', 'https://i.pinimg.com/originals/55/a9/4e/55a94e824b3cebe89496ad64dd2b2f01.png'],
    ['Bebidas', 'https://images.vexels.com/media/users/3/266647/isolated/preview/798cbd189f4c2fd5fe83e6f6eb6b46ff-lata-de-refrigerante-vermelha.png']
  ];

  const handleMudarTipoDesejado = (novoTipo: string) => {
    dispatch(setTipoDesejado(novoTipo));
    navigate(`/cardapio/${novoTipo.toLowerCase()}`);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsFixed(scrollY > 1);
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
    <>
      <ul className={isFixed ? 'ulClass fixed' : 'ulClass'}>
        {listaItensCardapio.map((item, index) => (
          <li key={index} onClick={() => { handleMudarTipoDesejado(item[0]); scrollToTop(); }} className={item[0] === tipoSelecionado ? 'item-selecionado-grupos' : 'item-selecionado-grupos-sqn'} style={{ backgroundImage: `url(${item[1]})` }}>
            <h3>{item[0]}</h3>
          </li>
        ))}
      </ul>

      <div className='cardapio-container' style={{
        marginTop: isFixed ? '115px' : '0'
      }}>

        <div className='conteudo-cardapio'>
          <h4>Cardápio de {tipoSelecionado}</h4>
          <GaleriaDeProdutos />
        </div>
      </div>
    </>
  );
};

export default CardapioPrincipal;
