import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { Cliente, Produto, PromoTipo } from '../../redux/types';
import { adicionarProdutoCarrinho } from '../../redux/clienteReducer';

const PromoComponent: React.FC = () => {
    const dispatch = useDispatch();
    const todosProdutos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);
    const clientes = useSelector((state: RootState) => state.cliente.clientes);
    const clienteZero: Cliente | undefined = clientes.find((cliente: Cliente) => cliente.id === 0);
    const carrinhoID = 0;
    const scrollToAnchor = (anchorId: string) => {
        const element = document.getElementById(anchorId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleAdicionarProduto = (produto: Produto) => {
        console.log(produto);
        if (clienteZero) {
            const carrinhoDoClienteZero = clienteZero.pedido?.carrinho?.[carrinhoID];
            dispatch(adicionarProdutoCarrinho(carrinhoDoClienteZero?.id || 1, produto));
        } else {
            const novoCarrinho = {
                id: carrinhoID,
                produtos: [[produto, 1]],
            };
            dispatch(adicionarProdutoCarrinho(novoCarrinho.id, produto));
        }
    };

    const groupByPromotion = (produtos: Produto[]): Record<string, Produto[]> => {
        const grupos: Record<string, Produto[]> = {};

        produtos.forEach((produto) => {
            produto.promo?.forEach((promocao: PromoTipo) => {
                const nomePromocao = promocao.nome;

                if (!grupos[nomePromocao]) {
                    grupos[nomePromocao] = [];
                }

                grupos[nomePromocao].push(produto);
            });
        });

        return grupos;
    };

    const applyDiscount = (produto: Produto, promocao: PromoTipo) => {
        let valorComDesconto = produto.valor;

        valorComDesconto -= promocao.valor;

        if (promocao.porcentagem !== 0) {
            const descontoPercentual = (promocao.porcentagem / 100) * produto.valor;
            valorComDesconto -= descontoPercentual;
        }

        // Garante que o valor não seja negativo
        return Math.max(valorComDesconto, 0);
    };

    const promoGroups = groupByPromotion(todosProdutos);

    return (
        <div  className='promo-oferta-conteudo-container'>
            <div id='home-inicio-navegacao' className='lista-grupos'>
                <div  className='h2-grupo'  >
                    {Object.entries(promoGroups).map(([grupo, produtos]) => (
                        <div key={grupo} id={`grupo-af${grupo.length}${grupo[grupo.length - 1]}`}>

                            <h2 onClick={() => scrollToAnchor(`grupo-af${grupo.length}${grupo[grupo.length - 1]}`)}>{grupo} </h2>

                            <>
                                {produtos.map((produto) => (
                                    <li onClick={() => scrollToAnchor(`produto-${produto.id}`)} key={produto.id} className='lista-li-produto'>
                                        <img src={produto.img} alt={produto.nome}
                                            style={{ maxWidth: '30px', maxHeight: '30px', transform: 'rotate(-90deg)' }} />
                                        <br />{produto.nome}

                                    </li>


                                ))}
                            </>


                        </div>
                    ))}
                </div>
            </div>

            {Object.entries(promoGroups).map(([grupo, produtos]) => (
                <div key={grupo}>

                    <ul className='lista-produto-conteudo'>

                        {produtos.map((produto) => {
                            const promocao = produto.promo?.find((p) => p.nome === grupo);
                            const valorComDesconto = promocao ? applyDiscount(produto, promocao) : produto.valor;

                            return (
                                <div id={`produto-${produto.id}`} >
                                    <li key={produto.id} style={{
                                        backgroundColor: produto.promo[0].corf,
                                        color: produto.promo[0].cort,
                                        fontFamily: produto.promo[0].font,
                                        backgroundImage: `url(${produto.imgbg[0]})`

                                    }}>


                                        <img src={produto.img} alt={produto.nome}
                                            style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                        <div className='conteudo-promorcional-texto-valores'>
                                            <strong>
                                                {produto.nome}
                                            </strong>
                                            <br />
                                            <p style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                                {produto.descricao}
                                            </p>

                                            {promocao && (
                                                <div className='principal-comercio-padrao'>
                                                    {valorComDesconto !== produto.valor ?
                                                        <p style={{ borderBottom: '1px solid #000', paddingBottom: '10px' }}>
                                                            {(produto.valor * promocao.porcentagem / 100) !== 0 ?
                                                                <>
                                                                    <br />
                                                                    <strong style={{ fontSize: 'large', color: 'brown' }}>-R${(produto.valor * promocao.porcentagem / 100).toFixed(2)}
                                                                    </strong>({promocao.porcentagem}%)
                                                                </> :
                                                                ''
                                                            }
                                                            {promocao.valor !== 0 ?
                                                                <>
                                                                    <br />
                                                                    <strong>Desconto:</strong> - R$ {promocao.valor.toFixed(2)}
                                                                </>
                                                                :
                                                                ''
                                                            }
                                                            <h3>
                                                                {valorComDesconto !== produto.valor ?
                                                                    <> <s style={{ color: 'gray' }}> R$  {produto.valor} </s></>
                                                                    :
                                                                    <strong className='precoTotalComDesconto'> R$ {produto.valor}</strong>}
                                                            </h3>
                                                            <strong className='precoTotalComDesconto'> R$ {valorComDesconto.toFixed(2)}</strong>

                                                        </p>
                                                        :
                                                        <strong className='precoTotalComDesconto'> R$ {valorComDesconto.toFixed(2)}</strong>
                                                    }
                                                    <button onClick={() => handleAdicionarProduto(produto)} >Comprar</button>
                                                </div>
                                            )}

                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>

                </div>
            ))} 
            
        </div>
    );
};

export default PromoComponent;
