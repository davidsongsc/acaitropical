import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../visual/galeriaProdutos.css';
import { RootState } from '../../redux/store';
import { retornarValorString } from '../extensoes/moduloScriptsAjuda';
import { LuBadgeMinus, LuBadgePlus } from 'react-icons/lu';
import { Cliente, Produto } from '../../redux/types';
import { adicionarProdutoCarrinho, removerProdutoCarrinho } from '../../redux/clienteReducer';

let tamanhoIcone = 20;

const GaleriaDeProdutos: React.FC = () => {
    const dispatch = useDispatch();
    const produtos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);
    const tipoSelecionado = useSelector((state: RootState) => state.tipoDesejado);
    const clientes = useSelector((state: RootState) => state.cliente.clientes);
    const clienteZero: Cliente | undefined = clientes.find((cliente: Cliente) => cliente.id === 0);
    const produtosFiltrados = produtos.filter((produto) => produto.tipo[0].nome === tipoSelecionado);
    const carrinhoID = 0;

    const getQuantidadeNoCarrinho = (produtoId: number): number => {
        const produtoNoCarrinho = clienteZero?.pedido?.carrinho
            ?.flatMap((carrinho) => carrinho.produtos)
            .find(([produto]) => produto.id === produtoId);
        return produtoNoCarrinho ? produtoNoCarrinho[1] : 0;
    };

    const handleAdicionarProduto = (produto: Produto) => {
        // Verificar se o cliente existe
        if (clienteZero) {
            const carrinhoDoClienteZero = clienteZero.pedido?.carrinho?.[carrinhoID]; // Supondo que o cliente Zero só tem um carrinho
            // Cliente existe, adicionar produto ao carrinho
            dispatch(adicionarProdutoCarrinho(carrinhoDoClienteZero?.id || 1, produto));
        } else {
            // Cliente não existe, criar novo carrinho e adicionar produto
            const novoCarrinho = {
                id: carrinhoID, // Substitua pelo ID apropriado do carrinho
                produtos: [[produto, 1]],
            };
            dispatch(adicionarProdutoCarrinho(novoCarrinho.id, produto));
        }
    };

    const handleRemoverProduto = (produtoId: number) => {
        // Verificar se o cliente existe
        if (clienteZero) {
            const carrinhoDoClienteZero = clienteZero.pedido?.carrinho?.[0]; // Supondo que o cliente Zero só tem um carrinho
            dispatch(removerProdutoCarrinho(carrinhoDoClienteZero?.id || 1, produtoId));
        } else {
            dispatch(removerProdutoCarrinho(1, produtoId));
        }
    };

    return (
        <div className='galeria-produtos'>
            {produtosFiltrados.map((produto) => (
                <div key={produto.id} className='produtosCatalogo'>
                    <div>
                        <img src={produto.img} alt={produto.descricao} />
                        <div className='butoes'>
                            <button onClick={() => handleRemoverProduto(produto?.id)} disabled={getQuantidadeNoCarrinho(produto?.id) === 0}>
                                <LuBadgeMinus size={tamanhoIcone} style={{ position: 'relative', left: '-5.5px' }} />
                            </button>
                            <input type='text' value={getQuantidadeNoCarrinho(produto?.id)} readOnly />
                            <button onClick={() => handleAdicionarProduto(produto)}>
                                <LuBadgePlus size={tamanhoIcone} style={{ position: 'relative', left: '-5.5px' }} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h5>{produto.nome}</h5>
                        <p>
                            <strong className='ValorRealMoeda'>R$</strong>
                            <strong>
                                {retornarValorString(produto.valor)[0]}
                                {retornarValorString(produto.valor)[1]}
                            </strong>
                            <strong>
                                {retornarValorString(produto.valor)[2]}
                                {retornarValorString(produto.valor)[3]}
                                {retornarValorString(produto.valor)[4]}
                            </strong>
                        </p>
                        <p>{produto.descricao}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GaleriaDeProdutos;
