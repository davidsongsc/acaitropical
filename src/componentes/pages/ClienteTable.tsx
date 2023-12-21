import React, { useState } from 'react';
import { retornaPrimeiroUltimoNome } from '../extensoes/moduloScriptsAjuda';
import PedidoTable from './PedidoTable';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Cliente, Logradouro } from '../../redux/types';

const ClienteTable: React.FC = () => {
  const clientes = useSelector((state: RootState) => state.cliente.clientes);
  const [selecionarEndereco, setSelecionarEndereco] = useState<Logradouro | null>(null);

  const handleTrocarEndereco = (enderecoSelecionado: Logradouro | null) => {
    setSelecionarEndereco(enderecoSelecionado);
  };
  // Filtrar apenas o cliente com id igual a 1
  const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);

  if (!clienteFiltrado) {
    // Cliente não encontrado, pode mostrar uma mensagem ou retornar null
    return <p>Cliente não encontrado</p>;
  }
  const style = {display: 'none'}
  return (
    <div className="cliente-carrinho-container">
      <div>
        <ul>
          <li>Nome: {retornaPrimeiroUltimoNome(clienteFiltrado.nome)}</li>
          <li>Contato: {clienteFiltrado.contato}</li>
          <li style={style}>Pedido: {clienteFiltrado.pedido.id}</li>
          {selecionarEndereco && (
            <>
              <ul>

                <li style={style}>{`UF: ${selecionarEndereco.estado} | ${selecionarEndereco.cidade}`}</li>
                <li>{`CEP: ${selecionarEndereco.cep}`}</li>
                <li>{`Rua: ${selecionarEndereco.rua},  ${selecionarEndereco.numero}`}</li>
                <li>{`Bairro: ${selecionarEndereco.bairro}`}</li>
              </ul>
            </>
          )}
        </ul>
        <PedidoTable />
        <div className='area-endereco-container'>
          <label>Selecione o Endereço:</label>
          <select
            value={selecionarEndereco?.rua || ''}
            onChange={(e) => {
              const selectedRua = e.target.value;
              const selectedLogradouro: Logradouro | undefined = clienteFiltrado.localEntrega.find(
                (logradouro: Logradouro) => logradouro.rua === selectedRua
              );
              handleTrocarEndereco(selectedLogradouro || null);
            }}
          >
            <option value="" disabled>
              Entregar em:
            </option>
            {clienteFiltrado.localEntrega.map((logradouro: Logradouro) => (
              <option key={logradouro.rua} value={logradouro.rua}>
                {logradouro.rua}
              </option>
            ))}
          </select>

          {/* Display selected address information */}
          
        </div>
      </div>
    </div>
  );
};

export default ClienteTable;
