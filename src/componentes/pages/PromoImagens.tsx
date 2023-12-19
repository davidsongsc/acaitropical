import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { Produto, PromoTipo } from '../../redux/types';

const PromoComponent: React.FC = () => {
    const todosProdutos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);

    // Função para agrupar produtos por promoção
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

        if (promocao.tipo === 'desconto especial') {
            // Se for uma promoção de desconto, subtrai o valor fixo
            valorComDesconto -= promocao.valor;

            // Se a porcentagem for diferente de zero, aplica o desconto percentual
            if (promocao.porcentagem !== 0) {
                const descontoPercentual = (promocao.porcentagem / 100) * produto.valor;
                valorComDesconto -= descontoPercentual;
            }
        }

        // Garante que o valor não seja negativo
        return Math.max(valorComDesconto, 0);
    };

    const promoGroups = groupByPromotion(todosProdutos);

    return (
        <div className='promo-oferta-conteudo-container'>
            {Object.entries(promoGroups).map(([grupo, produtos]) => (
                <div key={grupo}>
                    <div className='h2-grupo'>
                        <h2>{grupo}</h2>
                    </div>

                    <ul>
                        {produtos.map((produto) => {
                            const promocao = produto.promo?.find((p) => p.nome === grupo);
                            const valorComDesconto = promocao ? applyDiscount(produto, promocao) : produto.valor;

                            return (
                                <li key={produto.id}>
                                    {/* Adicionar um Link para o ID do produto no cardápio */}
                                    <Link to={`/cardapio/${produto.id}`}>
                                        <img src={produto.img} alt={produto.nome} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                        <h1>{produto.nome}</h1>
                                        <h3>
                                            {valorComDesconto.toFixed(2) !== '0' ?
                                                <> De:<s> R$  {produto.valor} </s></>
                                                :
                                                <> {produto.valor}</>}
                                        </h3>
                                        {promocao && (
                                            <>
                                                <p style={{ borderBottom: '1px solid #000', paddingBottom: '10px' }}>
                                                    Por: <strong style={{fontSize: 'xx-large'}}> R$ {valorComDesconto.toFixed(2)}</strong> <br /><strong>Desconto:</strong> - R$ {promocao.valor.toFixed(2)} ({promocao.porcentagem}%)
                                                </p>
                                            </>
                                        )}
                                        <p>{produto.descricao}</p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PromoComponent;
