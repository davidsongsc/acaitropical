import React, { useState } from 'react';
import '../visual/loginEstilo.css';  // Make sure to create your own CSS file for styling
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Cliente } from '../../redux/types';
import HistoricoPedidos from './HistoricoPedidos';

const Conta: React.FC = () => {
    const clientes = useSelector((state: RootState) => state.cliente.clientes);
    const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);

    if (!clienteFiltrado) {
        // Cliente não encontrado, pode mostrar uma mensagem ou retornar null
        return <p>Cliente não encontrado</p>;
    }
    const nomeUser = clienteFiltrado.nome.split(' ');
    const emnailUser = clienteFiltrado.info.email;
    const telUser = clienteFiltrado.info.telefone1;


    return (
        <div className="usuario-configuracoes">
            <main>
                <section>
                    <h2>Perfil do Usuário</h2>
                    <h3>  {nomeUser[0]} {nomeUser[nomeUser.length - 1]}</h3>
                    <p>{emnailUser}</p>
                    <p>{telUser}</p>
                </section>
                <section>
                    <h3>Histórico de Pedidos</h3>
                    <HistoricoPedidos />
                    {/* Componente OrderHistory pode ser renderizado aqui */}
                </section>

                <section>
                    <h3>Compras Favoritas</h3>
                    {/* Componente FavoritePurchases pode ser renderizado aqui */}
                </section>

                <section>
                    <h3>Configurações da Conta</h3>
                    {/* Componente AccountSettings pode ser renderizado aqui */}
                </section>
            </main>
        </div>
    );
};

export default Conta;
