import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cliente, Carrinho, Produto } from '../../redux/types';
import { RootState } from '../../redux/store';
import { adicionarProdutoCarrinho, removerProdutoCarrinho } from '../../redux/carrinhoReducer';

const PedidoTable: React.FC = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state: RootState) => state.cliente.clientes);

  const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);

  if (!clienteFiltrado) {
    return <div>No data found for the specified client ID</div>;
  }

  const handleAdicionarProduto = (carrinhoId: number, produto: Produto) => {
    dispatch(adicionarProdutoCarrinho(carrinhoId, produto));
  };

  const handleRemoverProduto = (carrinhoId: number, produtoId: number) => {
    dispatch(removerProdutoCarrinho(carrinhoId, produtoId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Produto</th>
          <th>Qtd</th>
          <th>Und</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {clienteFiltrado.pedido.carrinho.map((carrinho: Carrinho, index: number) => (
          <tr key={index}>
            {carrinho.produtos.map(([produto, quantidade]: [Produto, number], produtoIndex: number) => (
              <React.Fragment key={produtoIndex}>
                <td><img src={produto.img} alt={produto.nome} /></td>
                <td>{produto.nome}</td>
                <td>
                  <button onClick={() => handleRemoverProduto(carrinho.id, produto.id)}>-</button>
                  {quantidade}
                  <button onClick={() => handleAdicionarProduto(carrinho.id, produto)}>+</button>
                </td>
                <td>{produto.valor}</td>
                <td>{produto.valor * quantidade}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PedidoTable;
