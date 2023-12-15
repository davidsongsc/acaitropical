import React, { useState } from 'react';
import '../visual/carrinhoCompras.css';
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi';
import ClienteTable from './ClienteTable';


const CarrinhoComprasLista: React.FC = () => {
    const [showCarrinhoCompras, setShowCarrinhoCompras] = useState(false);
    const handleCarrinhoClick = () => {
        setShowCarrinhoCompras(!showCarrinhoCompras);
    };
    return (
        <div className={`carrinho-pedidos-container `}>
            <div className="carrinho" onClick={handleCarrinhoClick} >
                <FiShoppingCart />
            </div>
            <div className={`painel-carrinho ${showCarrinhoCompras ? 'carrinho-ativo' : 'carrinho-ativo-sqn'}`} >


                <h3>
                    <FiShoppingBag size={25} /> Conferência</h3>
                <ClienteTable />
                <button className='botao-fechar-carrinho' onClick={handleCarrinhoClick} style={{ display: showCarrinhoCompras ? 'block' : 'none' }}>X</button>
            </div>
        </div >
    );
};

export default CarrinhoComprasLista;
