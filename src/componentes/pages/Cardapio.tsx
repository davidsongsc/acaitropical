import React from 'react';
import '../visual/cardapioEstilo.css';
import GaleriaDeProdutos from './GaleriaProdutos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setTipoDesejado } from '../../redux/actions';

const CardapioPrincipal: React.FC = () => {
    const listaItensCardapio = [
        ['Açai', 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-acai-bowl-vector-png-image_6891778.png'],
        ['Biscoitos', 'https://cdn-icons-png.flaticon.com/512/1868/1868775.png'],
        ['Doces', 'https://images.vexels.com/media/users/3/268856/isolated/preview/9f4fb6c71e1ad36d551ab6526eab362b-comida-de-cupcake-de-doces.png'],
        ['Salgados', 'https://i.pinimg.com/originals/55/a9/4e/55a94e824b3cebe89496ad64dd2b2f01.png'],
        ['Bebidas', 'https://images.vexels.com/media/users/3/266647/isolated/preview/798cbd189f4c2fd5fe83e6f6eb6b46ff-lata-de-refrigerante-vermelha.png']

    ];
    const tipoSelecionado = useSelector((state: RootState) => state.tipoDesejado);
    const dispatch = useDispatch();

    const handleMudarTipoDesejado = (novoTipo: string) => {
        // Dispatch da ação para definir o tipo desejado
        dispatch(setTipoDesejado(novoTipo));
    };
    return (
        <div className='cardapio-container'>
            <h2>Cardápio</h2>
            <ul>
                {listaItensCardapio.map((item, index) => (
                    <li key={index} onClick={() => handleMudarTipoDesejado(item[0])} className={item[0] === tipoSelecionado ? 'item-selecionado-grupos' : ''} style={{ backgroundImage: `url(${item[1]})` }}>
                        <h3 >
                            {item[0]}
                        </h3>

                    </li>
                ))}
            </ul>
            <GaleriaDeProdutos />
        </div>
    );
};

export default CardapioPrincipal;
