import React from 'react';
import { retornaPrimeiroUltimoNome } from '../extensoes/moduloScriptsAjuda';
import PedidoTable from './PedidoTable';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Cliente } from '../../redux/types';

const ClienteTable: React.FC = () => {
  const clientes = useSelector((state: RootState) => state.cliente.clientes);

  // Filtrar apenas o cliente com id igual a 1
  const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);

  if (!clienteFiltrado) {
    // Cliente não encontrado, pode mostrar uma mensagem ou retornar null
    return <p>Cliente não encontrado</p>;
  }

  return (
    <div className="cliente-carrinho-container">
      <div>
        <ul>
          <li>Nome: {retornaPrimeiroUltimoNome(clienteFiltrado.nome)}</li>
          <li>Contato: {clienteFiltrado.contato}</li>
          <li>Pedido: {clienteFiltrado.pedido.id}</li>
        </ul>
        <PedidoTable />
      </div>
    </div>
  );
};

export default ClienteTable;
