import React, { useEffect, useState } from 'react';
import '../visual/carrinhoCompras.css';
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi';
import ClienteTable from './ClienteTable';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Carrinho, Cliente, Produto } from '../../redux/types';
import { LuXOctagon } from 'react-icons/lu';


const CarrinhoComprasLista: React.FC = () => {
    const clientes = useSelector((state: RootState) => state.cliente.clientes);
    const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);
    const [totalCarrinho, setTotalCarrinho] = useState<number>(0);
    const [showCarrinhoCompras, setShowCarrinhoCompras] = useState(false);
    const handleCarrinhoClick = () => {
        setShowCarrinhoCompras(!showCarrinhoCompras);
    };

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
    return (
        <div className={`carrinho-pedidos-container `} style={{ display: totalCarrinho === 0 ? 'none' : '' }}>
            <div className="carrinho" onClick={handleCarrinhoClick} >
                <FiShoppingCart />
                <h5>
                    {totalCarrinho}
                    
                </h5>
                
            </div>
            <div className={`painel-carrinho ${showCarrinhoCompras ? 'carrinho-ativo' : 'carrinho-ativo-sqn'}`} >


                <h3>
                    <FiShoppingBag size={25} /> Conferência</h3>
                <ClienteTable />
                <button className='botao-fechar-carrinho' onClick={handleCarrinhoClick} style={{ display: showCarrinhoCompras ? 'block' : 'none', position: 'fixed' }}><LuXOctagon size={'42px'} color='#fff' /></button>
            </div>
        </div >
    );
};

export default CarrinhoComprasLista;
