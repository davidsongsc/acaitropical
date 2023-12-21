import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { Produto, PromoTipo } from '../../redux/types';

const PromoComponent: React.FC = () => {
    const todosProdutos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);
    const scrollToAnchor = (anchorId: string) => {
        const element = document.getElementById(anchorId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
        <div className='promo-oferta-conteudo-container'>
            {Object.entries(promoGroups).map(([grupo, produtos]) => (
                <div key={grupo}>


                    <ul>
                        <div className='h2-grupo'  >
                            <h2>{grupo} </h2>
                            <>
                                {produtos.map((produto) => (
                                    <li onClick={() => scrollToAnchor(`produto-${produto.id}`)} key={produto.id}>
                                        <img src={produto.img} alt={produto.nome}
                                            style={{ maxWidth: '30px', maxHeight: '30px', transform: 'rotate(-90deg)' }} />
                                        {produto.nome}

                                    </li>


                                ))}
                            </>

                        </div>

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
                                                    <button>Comprar</button>
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
