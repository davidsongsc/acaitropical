import React from 'react';
import { Pedido } from '../../redux/types';

interface PedidoTableProps {
  pedido: Pedido;
}

const PedidoTable: React.FC<PedidoTableProps> = ({ pedido }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>...</th>
          <th>Produto</th>
          <th>Qtd</th>
          <th>Und</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {pedido.carrinho.map((carrinho, index) => (
          <tr key={index}>
            {carrinho.produtos.map((produto, produtoIndex) => (
              <React.Fragment key={produtoIndex}>
                <td><img src={produto.img} alt={produto.nome}/></td>
                <td>{produto.nome}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.valor}</td>
                <td>{produto.valor * produto.quantidade}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PedidoTable;
