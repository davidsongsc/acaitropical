import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Carrinho, Cliente, Produto } from '../../redux/types';
import PedidoTable from './PedidoTable';

const HistoricoPedidos: React.FC = () => {
    const clientes = useSelector((state: RootState) => state.cliente.clientes);
    const [totalCarrinho, setTotalCarrinho] = useState<number>(0);

    const clienteFiltrado = clientes.find((cliente: Cliente
    ) => cliente.id === 0);

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

    if (!clienteFiltrado) {
        // Cliente não encontrado, pode mostrar uma mensagem ou retornar null
        return <p>Cliente não encontrado</p>;
    }

    return (
        <div className='historico-pedidos-container' style={{display: totalCarrinho === 0 ? 'none': ''}}>
            <div className='pedido-atual'>
                {/* Implemente a lógica para exibir as compras favoritas aqui */}
                <PedidoTable />
            </div>
            <div className='ultimos-pedidos'>
                {/* Implemente a lógica para exibir as compras favoritas aqui */}
            </div>
        </div>
    )
};

export default HistoricoPedidos;