import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../visual/galeriaProdutos.css';
import { RootState } from '../../redux/store';
import { retornarValorString } from '../extensoes/moduloScriptsAjuda';
import { LuBadgeMinus, LuBadgePlus, LuListChecks } from 'react-icons/lu';
import { Cliente, Produto } from '../../redux/types';
import { adicionarProdutoCarrinho, removerProdutoCarrinho } from '../../redux/clienteReducer';
import { useParams } from 'react-router-dom';

let tamanhoIcone = 16;

const GaleriaDeProdutos: React.FC = () => {
    const dispatch = useDispatch();
    const produtos = useSelector((state: RootState) => state.galeriaProdutos.todosProdutos);
    const tipoSelecionado = useSelector((state: RootState) => state.tipoDesejado);
    const clientes = useSelector((state: RootState) => state.cliente.clientes);
    const [imgOdescricao, setImgODescricao] = useState(false);
    const [descricaoVisivel, setDescricaoVisivel] = useState<number | null>(null);

    const clienteZero: Cliente | undefined = clientes.find((cliente: Cliente) => cliente.id === 0);
    const produtosFiltrados = produtos.filter((produto) => produto.tipo[0].nome === tipoSelecionado);
    const [ingredientesSelecionadosPorProduto, setIngredientesSelecionadosPorProduto] = useState<Record<number, Array<Array<{ nome: string, quantidade: number }>>>>({});
    const carrinhoID = 0;
    const { tipo } = useParams();
    console.log(produtosFiltrados)
    useEffect(() => {
        // Filtrar os produtos com base no tipo selecionado ou no parâmetro da URL
        const produtosFiltrados = produtos.filter((produto) => produto.tipo[0].nome === (tipo || tipoSelecionado?.toLocaleLowerCase));
        console.log(produtosFiltrados)
        console.log(tipo)
        console.log(tipoSelecionado)
        // Restante do código...
        // Por exemplo, você pode utilizar produtosFiltrados para renderizar a lista de produtos.
    }, [produtos, tipo, tipoSelecionado]);


    const getQuantidadeNoCarrinho = (produtoId: number): number => {
        const quantidadeNoCarrinho = clienteZero?.pedido?.carrinho
            ?.flatMap((carrinho) => carrinho.produtos)
            .filter(([produto]) => produto.id === produtoId)
            .reduce((total, [, quantidade]) => total + quantidade, 0);

        return quantidadeNoCarrinho || 0;
    };


    const handleAdicionarProduto = (produto: Produto) => {
        console.log(produto);
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

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        produtoId: number,
        cartItemIndex: number,
        ingrediente: string
    ) => {
        setIngredientesSelecionadosPorProduto((prevIngredientes) => {
            const updatedIngredientes = { ...prevIngredientes };

            // Ensure the product entry exists
            if (!updatedIngredientes[produtoId]) {
                updatedIngredientes[produtoId] = [];
            }

            // Ensure the unit entry exists
            if (!updatedIngredientes[produtoId][cartItemIndex]) {
                updatedIngredientes[produtoId][cartItemIndex] = [];
            }

            const ingredientesSelecionadosAtual = updatedIngredientes[produtoId][cartItemIndex];
            const existingIngredienteIndex = ingredientesSelecionadosAtual.findIndex((item) => item.nome === ingrediente);
            const existingIngrediente = existingIngredienteIndex !== -1 ? ingredientesSelecionadosAtual[existingIngredienteIndex] : null;

            console.log('Existing Ingrediente:', existingIngrediente);

            if (event.target.checked) {
                // Add to the array if checked
                if (existingIngrediente) {
                    // If the ingrediente is already selected, increment the quantity, up to a maximum of 5
                    if (existingIngrediente.quantidade < 5) {
                        existingIngrediente.quantidade += 1;
                    }
                } else {
                    // If the ingrediente is not selected, add it with a quantity of 1, up to a maximum of 5
                    if (ingredientesSelecionadosAtual.length < 5) {
                        updatedIngredientes[produtoId][cartItemIndex].push({ nome: ingrediente, quantidade: 1 });
                    }
                }
            } else {
                // Remove from the array if unchecked
                if (existingIngrediente) {
                    // If the ingrediente is already selected, decrement the quantity, and remove if it reaches 0
                    existingIngrediente.quantidade = Math.max(
                        existingIngrediente.quantidade - 1,
                        0
                    );
                    if (existingIngrediente.quantidade === 0) {
                        updatedIngredientes[produtoId][cartItemIndex] = updatedIngredientes[produtoId][cartItemIndex].filter(
                            (item) => item.nome !== ingrediente
                        );
                    }
                }
            }

            console.log('Updated Ingredientes:', updatedIngredientes);

            return updatedIngredientes;
        });
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
            {produtosFiltrados.map((produto) => {
                const quantidadeNoCarrinho = getQuantidadeNoCarrinho(produto?.id);
                const promocao = produto.promo?.[0];

                return (
                    <div key={produto.id} className='produtosCatalogo' style={{ border: promocao && 'gold groove' }}>
                        <div className='container-img-qtd'>
                            <div className='bgImgProdutoNeutro'>
                                {/* Adicione um onClick para cada produto */}
                                <img
                                    onClick={() => setDescricaoVisivel(descricaoVisivel === produto.id ? null : produto.id)}
                                    className={getQuantidadeNoCarrinho(produto?.id) === 0 ? 'imgSelecionadoQtd' : ''}
                                    src={produto.img}
                                    alt={produto.descricao}
                                    style={{ display: descricaoVisivel === produto.id ? 'none' : 'block' }}
                                />
                                <p
                                    onClick={() => setDescricaoVisivel(descricaoVisivel === produto.id ? null : produto.id)}
                                    className='bgDescricao'
                                    style={{ display: descricaoVisivel === produto.id ? 'block' : 'none' }}
                                >
                                    {produto.descricao}
                                </p>
                            </div>
                        </div>
                        {promocao && (
                            <div className="promocao-info" style={{ display: descricaoVisivel === produto.id ? 'none' : '' }}>

                            </div>
                        )}
                        <div className='ingredientes-container' style={{ display: (getQuantidadeNoCarrinho(produto?.id)) === 0 ? 'none' : 'block' }}>
                            <h6>
                                <LuListChecks />
                                {[...Array(quantidadeNoCarrinho)].map((_, cartItemIndex) => (
                                    <div key={cartItemIndex}>
                                        {produto.composicaoBasica && produto.composicaoBasica[cartItemIndex] && (
                                            produto.composicaoBasica[cartItemIndex].map((composicao, index) => (
                                                <div key={index} className='ingredientes'>
                                                    {composicao.ingredientes && composicao.ingredientes.map((ingrediente, i) => {
                                                        const ingredienteSelecionado = ingredientesSelecionadosPorProduto[produto.id]?.[cartItemIndex]?.find((item) => item.nome === ingrediente) || {
                                                            nome: ingrediente,
                                                            quantidade: 0,
                                                        };

                                                        const checkboxId = `ingrediente-${produto.id}-${cartItemIndex}-${index}-${i}`;

                                                        return (
                                                            <div key={i}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={checkboxId}
                                                                    value={ingrediente}
                                                                    checked={ingredienteSelecionado.quantidade > 0}
                                                                    onChange={(e) => handleCheckboxChange(e, produto.id, cartItemIndex, ingrediente)}
                                                                />
                                                                <label
                                                                    htmlFor={checkboxId}
                                                                    style={{
                                                                        borderBottom: ingredienteSelecionado.quantidade > 0 ? 'red groove 1px' : 'inherit',
                                                                        color: ingredienteSelecionado.quantidade > 0 ? 'gold' : 'white',
                                                                    }}
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleCheckboxChange(
                                                                            { target: { checked: !ingredienteSelecionado.quantidade } } as React.ChangeEvent<HTMLInputElement>,
                                                                            produto.id,
                                                                            cartItemIndex,
                                                                            ingrediente
                                                                        );
                                                                    }}
                                                                >
                                                                    {ingrediente} {ingredienteSelecionado.quantidade > 0 ? `x${ingredienteSelecionado.quantidade}` : ''}
                                                                </label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                ))}
                            </h6>





                        </div>

                        <div className='bgImgProduto'>
                            <button onClick={() => handleRemoverProduto(produto?.id)} className={getQuantidadeNoCarrinho(produto?.id) === 0 ? 'botaoMenosL' : 'botaoMenosLA'} disabled={getQuantidadeNoCarrinho(produto?.id) === 0}>
                                <LuBadgeMinus size={tamanhoIcone} style={{ position: 'relative', left: '0px' }} />
                            </button>
                            <input type='text' className={getQuantidadeNoCarrinho(produto?.id) === 0 ? 'inputQtdProduto inputopc' : 'inputQtdProdutoLA'} value={getQuantidadeNoCarrinho(produto?.id)} readOnly />
                            <div>
                                <button onClick={() => handleAdicionarProduto(produto)} className={getQuantidadeNoCarrinho(produto?.id) === 0 ? 'botaoMenosR' : 'botaoMenosRA'} >
                                    <LuBadgePlus size={tamanhoIcone} style={{ position: 'relative', left: '0px' }} />
                                </button>
                            </div>
                        </div>
                        <div className='bgNomeValoresDescricao'>
                            <h5>{produto.nome}</h5>
                            <p className='valor-produto-catalogo'>
                                {(getQuantidadeNoCarrinho(produto?.id)) < 3 ?
                                    <strong className='ValorRealMoeda'></strong> :
                                    <strong className='ValorRealMoeda'>{getQuantidadeNoCarrinho(produto?.id)}X</strong>}
                                <strong>
                                    {retornarValorString(produto.valor)[0]}
                                    {retornarValorString(produto.valor)[1]}
                                </strong>
                                <strong>
                                    {retornarValorString(produto.valor)[2]}
                                    {retornarValorString(produto.valor)[3]}
                                    {retornarValorString(produto.valor)[4]}
                                </strong>
                                {getQuantidadeNoCarrinho(produto?.id) < 3 ?
                                    '' :
                                    <strong className='ValorRealMoeda' style={{ color: '#cc7722', fontSize: '12px', letterSpacing: '3px', textDecoration: 'overline #ffd700 1px' }}><br /><br />Total: {(getQuantidadeNoCarrinho(produto?.id) * produto.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>}
                            </p>

                        </div>
                        {/* 
                    <div className="ingredientes-container">
                        <p>
                            <h5><LuListTodo />  {ingredientesSelecionados.join(', ')}</h5>


                        </p>
                    </div>
                    */}

                    </div>
                )
            })}
        </div>
    );
};

export default GaleriaDeProdutos;
