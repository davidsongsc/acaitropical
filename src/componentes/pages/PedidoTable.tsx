import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cliente, Carrinho, Produto, PromoTipo } from '../../redux/types';
import { RootState } from '../../redux/store';
import { adicionarProdutoCarrinho, removerProdutoCarrinho } from '../../redux/clienteReducer';
import { retornarValorTaxaEntrega } from '../extensoes/moduloScriptsAjuda';

const PedidoTable: React.FC = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state: RootState) => state.cliente.clientes);
  const [taxaEntregador, setTaxaEntregador] = useState<number>(4);
  const [totalCarrinhoPuro, setTotalCarrinhoPuro] = useState<number>(0);
  const [totalCarrinho, setTotalCarrinho] = useState<number>(0);
  const clienteFiltrado = clientes.find((cliente: Cliente) => cliente.id === 0);
  const distancia = 1;
  const [selecionarTipoEntrega, setSelecionarTipoEntrega] = useState('');

  const handleSelecionarEntregador = (valor: string) => {
    setSelecionarTipoEntrega(valor);
  }

  const applyDiscount = (produto: Produto, promocoes: PromoTipo[] | undefined): number => {
    let valorComDesconto = produto.valor;

    if (promocoes) {
      promocoes.forEach((promocao) => {
        if (promocao.tipo === 'desconto') {
          valorComDesconto -= promocao.valor;

          if (promocao.porcentagem !== 0) {
            const descontoPercentual = (promocao.porcentagem / 100) * produto.valor;
            valorComDesconto -= descontoPercentual;
          }
        }
      });
    }

    return Math.max(valorComDesconto, 0);
  };

  const handleAdicionarProduto = (carrinhoId: number, produto: Produto) => {
    const promocoesProduto = produto.promo;
    const valorComDesconto = applyDiscount(produto, promocoesProduto);

    dispatch(adicionarProdutoCarrinho(carrinhoId, { ...produto, valor: valorComDesconto }));
  };

  useEffect(() => {
    setTaxaEntregador(retornarValorTaxaEntrega(distancia, selecionarTipoEntrega));

    setTotalCarrinho((prevTotal) => {
      const newTotal = clienteFiltrado?.pedido?.carrinho.reduce((total: number, carrinho: Carrinho) => {
        return (
          total +
          carrinho.produtos.reduce((subtotal: number, [produto, quantidade]: [Produto, number]) => {
            return subtotal - calcularTotalDescontos() + retornarValorTaxaEntrega(distancia, selecionarTipoEntrega) + produto.valor * quantidade;
          }, 0)
        );
      }, 0) || 0;

      return newTotal;
    });

    setTotalCarrinhoPuro((prevTotal) => {
      const newTotal = clienteFiltrado?.pedido?.carrinho.reduce((total: number, carrinho: Carrinho) => {
        return (
          total +
          carrinho.produtos.reduce((subtotal: number, [produto, quantidade]: [Produto, number]) => {
            return subtotal + produto.valor * quantidade;
          }, 0)
        );
      }, 0) || 0;

      return newTotal;
    });
  }, [clienteFiltrado, selecionarTipoEntrega]);

  const handleRemoverProduto = (carrinhoId: number, produtoId: number) => {
    dispatch(removerProdutoCarrinho(carrinhoId, produtoId));
  };

  const calcularTotalDescontos = (): number => {
    let totalDescontos = 0;

    clienteFiltrado?.pedido?.carrinho.forEach((carrinho: Carrinho) => {
      carrinho.produtos.forEach(([produto, quantidade]: [Produto, number]) => {
        const promocoesProduto = produto.promo;
        const valorOriginal = produto.valor * quantidade;
        const valorComDesconto = applyDiscount(produto, promocoesProduto) * quantidade;
        totalDescontos += valorOriginal - valorComDesconto;
      });
    });

    return totalDescontos;
  };

  const renderProdutos = (carrinho: Carrinho, index: number) => {
    const produtosRenderizados = carrinho.produtos.map(([produto, quantidade]: [Produto, number], produtoIndex: number) => (
      <tr key={produtoIndex}>
        <td colSpan={1} className='td-img'>
          <img src={produto.img} alt={produto.nome} />
        </td>
        <td colSpan={4} className='td-nome'>{produto.nome}</td>
        <td colSpan={1}  className='td-qtd'>
          <button onClick={() => handleRemoverProduto(carrinho.id, produto.id)}>-</button>
          <input type="text" value={quantidade} readOnly />
          <button onClick={() => handleAdicionarProduto(carrinho.id, produto)}>+</button>
        </td>
        <td className='td-vtotal' colSpan={1}>{(produto.valor * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
      </tr>
    ));

    return (
      <React.Fragment key={index}>
        {produtosRenderizados}
      </React.Fragment>
    );
  };

  const renderCarrinho = () => {
    return clienteFiltrado.pedido.carrinho.map((carrinho: Carrinho, index: number) => {
      return renderProdutos(carrinho, index);
    });
  };

  return (
    <div className='totais-conferencia'>
      <table>
        <thead>
          <tr>
            <th colSpan={1} className='th-img' style={{ width: '25px' }}>Img</th>
            <th colSpan={4} className='th-nome' style={{ width: '125px' }}>Produto</th>
            <th colSpan={1} className='th-qtd'>Qtd</th>
            <th colSpan={1} className='th-vtotal' style={{ width: '25px' }}>Total</th>
          </tr>
        </thead>
        <tbody style={{ height: '200px', overflowY: 'scroll' }}>
          {renderCarrinho()}
        </tbody>
        <tfoot>
          <tr className='total'>
            <td colSpan={4}>Totalidade</td>
            <td colSpan={4}>{totalCarrinhoPuro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
          <tr className='descontos'>
            <td colSpan={4}>Descontos</td>
            <td colSpan={4}>{calcularTotalDescontos() === 0 ? '' : '-'}{calcularTotalDescontos().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
          <tr className='taxa'>
            <td colSpan={4}>
              Taxa:
              <select
                name="tipoEntregador"
                id=""
                value={selecionarTipoEntrega}
                onChange={(e) => {
                  const novoTipoEntrega = e.target.value;
                  handleSelecionarEntregador(novoTipoEntrega);
                }}
              >
                <option key={0} value={''} >
                  Retirar Local
                </option>

                <option key={1} value={'moto'}>
                  Motoboy
                </option>
                
                <option key={2} value={'bike'}>
                  Bike
                </option>
              </select>
            </td>
            <td colSpan={4}>{taxaEntregador === 0 ? '' : '+'}{taxaEntregador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
          <tr className='total-conta'>
            <td colSpan={4}>Custo Total</td>
            <td colSpan={4}>{totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PedidoTable;
