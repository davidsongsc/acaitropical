import { ADICIONAR_PRODUTO_CARRINHO, Carrinho, Cliente, Logradouro, Pedido, Produto, REMOVER_PRODUTO_CARRINHO, SET_CLIENTES, DadosCliente } from './types';
import { initialState as produtosInitialState } from './galeriaProdutosReducer';

const exemploLogradouro: Logradouro = {
    cep: 12345678,
    estado: 'São Paulo',
    cidade: 'São Paulo',
    bairro: 'Centro',
    rua: 'Rua Principal',
    numero: 123,
    bloco: 'A',
    ap: '101',
    obs: 'Próximo à estação de metrô',
};

const exemploDadosCliente: DadosCliente = {
    cadastroPessoaFisica: '123.456.789-01',
    telefone1: 1122334455,
    telefone2: 5544332211,
    email: 'adebarbb@gmail.com'
};

const clientes: Cliente[] = [
    {
        id: 0,
        nome: 'Aderbaldo de Oliveira Gomes Silva',
        contato: '+5521987654321',
        pedido: {
            id: 1,
            carrinho: [
                { id: 1, produtos: [[produtosInitialState.todosProdutos[0], 1],] },

            ],
            dataHoraCriacaoCarrinho: '2023-01-01T10:00:00',
            dataHoraPedidoCarrinho: '2023-01-01T12:00:00',
        },
        localEntrega: [exemploLogradouro],
        info: exemploDadosCliente,
    },
    {
        id: 1,
        nome: 'Cliente 2',
        contato: '987-654-3210',
        pedido: {} as Pedido,
        localEntrega: [exemploLogradouro],
        info: exemploDadosCliente,
    },

];

export const adicionarProdutoCarrinho = (carrinhoId: number, produto: Produto): any => ({
    type: ADICIONAR_PRODUTO_CARRINHO,
    payload: {
        carrinhoId,
        produto,
    },
});

export const removerProdutoCarrinho = (carrinhoId: number, produtoId: number): any => ({
    type: REMOVER_PRODUTO_CARRINHO,
    payload: {
        carrinhoIdToRemove: carrinhoId,
        produtoIdToRemove: produtoId,
    },
});


interface ClienteState {
    clientes: Cliente[];

}

const initialState: ClienteState = {
    clientes: clientes,

};

const clienteReducer = (state: ClienteState = initialState, action: any) => {
    switch (action.type) {
        case SET_CLIENTES:
            return {
                ...state,
                clientes: action.payload,
            };

            case ADICIONAR_PRODUTO_CARRINHO: {
                const { carrinhoId, produto } = action.payload;
                console.log(action);
                const clienteIndex = state.clientes.findIndex((cliente) =>
                  cliente.pedido &&
                  cliente.pedido.carrinho &&
                  cliente.pedido.carrinho.some((carrinho) => carrinho.id === carrinhoId)
                );
              
                const MAX_QUANTIDADE = 10;
              
                if (clienteIndex !== -1) {
                  const newState: ClienteState = JSON.parse(JSON.stringify(state));
              
                  newState.clientes[clienteIndex].pedido.carrinho = newState.clientes[clienteIndex].pedido.carrinho.map(
                    (carrinho: Carrinho) => {
                      if (carrinho.id === carrinhoId) {
                        const produtoExistente = carrinho.produtos.find(
                          (p: [Produto, number]) => p[0].id === produto.id
                        );
              
                        if (produtoExistente) {
                          if (produtoExistente[1] < MAX_QUANTIDADE) {
                            produtoExistente[1] += 1;
                          } else {
                           console.log('Quantidade máxima atingida para este item.');
                          }
                        } else {
                          carrinho.produtos.push([produto, 1]);
                        }
                      }
              
                      return carrinho;
                    }
                  );
              
                  const totalCarrinho = newState.clientes[clienteIndex].pedido.carrinho.reduce((total, carrinho) => {
                    return (
                      total +
                      carrinho.produtos.reduce((subtotal, [produto, quantidade]) => {
                        return subtotal + produto.valor * quantidade;
                      }, 0)
                    );
                  }, 0);
              
                  return {
                    ...newState,
                    totalCarrinho,
                  };
                }
              
                return state;
              }
              

        case REMOVER_PRODUTO_CARRINHO:
            const { carrinhoIdToRemove, produtoIdToRemove } = action.payload;
            const clienteIndexToRemove = state.clientes.findIndex((cliente) =>
                cliente.pedido && cliente.pedido.carrinho && cliente.pedido.carrinho.some((carrinho) => carrinho.id === carrinhoIdToRemove)
            );

            if (clienteIndexToRemove !== -1) {
                const newState: ClienteState = JSON.parse(JSON.stringify(state));

                newState.clientes[clienteIndexToRemove].pedido.carrinho = newState.clientes[clienteIndexToRemove].pedido.carrinho.map(
                    (carrinho: Carrinho) => {
                        if (carrinho.id === carrinhoIdToRemove) {
                            const produtoToRemoveIndex = carrinho.produtos.findIndex(
                                ([produto, quantidade]) => produto.id === produtoIdToRemove
                            );

                            if (produtoToRemoveIndex !== -1) {
                                const produtoToRemove = carrinho.produtos[produtoToRemoveIndex];

                                if (produtoToRemove[1] > 1) {
                                    // Se houver mais de uma unidade, reduz a quantidade
                                    produtoToRemove[1] -= 1;
                                } else {
                                    // Se houver apenas uma unidade, remove o produto do carrinho
                                    carrinho.produtos.splice(produtoToRemoveIndex, 1);
                                }
                            }
                        }

                        return carrinho;
                    }
                );

                const totalCarrinho = newState.clientes[clienteIndexToRemove].pedido.carrinho.reduce((total, carrinho) => {
                    return (
                        total +
                        carrinho.produtos.reduce((subtotal, [produto, quantidade]) => {
                            return subtotal + produto.valor * quantidade;
                        }, 0)
                    );
                }, 0);

                return {
                    ...newState,
                    totalCarrinho,
                };
            }

            // Se o cliente não for encontrado, retorne o estado original
            return state;

        default:
            return state;
    }
};


export default clienteReducer;