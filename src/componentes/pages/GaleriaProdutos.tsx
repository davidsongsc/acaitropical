import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../visual/galeriaProdutos.css';
import { RootState } from '../../redux/store';
import { retornarValorString } from '../extensoes/moduloScriptsAjuda';
import { LuShoppingCart } from 'react-icons/lu';
import { Produto } from '../../redux/types';
import { adicionarProdutoCarrinho, removerProdutoCarrinho } from '../../redux/carrinhoReducer';

const GaleriaDeProdutos: React.FC = () => {
    const produtos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);
    const tipoSelecionado = useSelector((state: RootState) => state.tipoDesejado);
    const carrinho = useSelector((state: RootState) => state.carrinho.carrinhos.find((c) => c.id === 1)); // Replace 1 with your actual cart ID
    const dispatch = useDispatch();

    const produtosFiltrados = produtos.filter((produto) => produto.tipo[0].nome === tipoSelecionado);

    const getQuantidadeNoCarrinho = (produtoId: number): number => {
        const produtoNoCarrinho = carrinho?.produtos.find((p) => p[0].id === produtoId);
        return produtoNoCarrinho ? produtoNoCarrinho[1] : 0;
    };
    const handleAdicionarProduto = (produto: Produto) => {
        dispatch(adicionarProdutoCarrinho(1, produto)); // Replace 1 with your actual cart ID
    };

    const handleRemoverProduto = (produtoId: number) => {
        dispatch(removerProdutoCarrinho(1, produtoId)); // Replace 1 with your actual cart ID
    };

    return (
        <div className='galeria-produtos'>
            {produtosFiltrados.map((produto) => (
                <div key={produto.id} className='produtosCatalogo'>
                    <div>
                        <img src={produto.img} alt={produto.descricao} />
                        <div className='butoes'>
                            <button onClick={() => handleRemoverProduto(produto.id)}>
                                <strong>-</strong> <LuShoppingCart />
                            </button>
                            <input type='text' value={getQuantidadeNoCarrinho(produto.id)} readOnly />
                            <button onClick={() => handleAdicionarProduto(produto)}>
                                <strong>+</strong> <LuShoppingCart />
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
