import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../visual/galeriaProdutos.css';
import { RootState } from '../../redux/store';
import { retornarValorString } from '../extensoes/moduloScriptsAjuda';
import { LuShoppingCart } from 'react-icons/lu';

const GaleriaDeProdutos: React.FC = () => {
    const produtos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);
    const tipoSelecionado = useSelector((state: RootState) => state.tipoDesejado);
    const dispatch = useDispatch();

    const produtosFiltrados = produtos.filter((produto) => produto.tipo[0].nome === tipoSelecionado);

    return (
        <div className='galeria-produtos'>
            {produtosFiltrados.map((produto) => (
                <div key={produto.id} className='produtosCatalogo'>
                    <div>
                        <img src={produto.img} alt={produto.descricao} />
                        <div className='butoes'>
                            <button>
                                <strong>-</strong> <LuShoppingCart />
                            </button>
                            <input type='text' value={0} />
                            <button>
                                <strong>+</strong> <LuShoppingCart />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h5>{produto.nome}</h5>
                        <p>
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
