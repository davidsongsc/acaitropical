import { Cliente, Pedido, SET_CLIENTES } from './types';
import { initialState as produtosInitialState } from './galeriaProdutosReducer';

const clientes: Cliente[] = [
    {
        id: 0,
        nome: 'Aderbaldo de Oliveira Gomes Silva',
        contato: '+5521987654321',
        pedido: {
            id: 1,
            carrinho: [{ id: 0, produtos: [[produtosInitialState.todosProdutos[0], 1],] }],
            dataHoraCriacaoCarrinho: '2023-01-01T10:00:00',
            dataHoraPedidoCarrinho: '2023-01-01T12:00:00',
        },
    },
    {
        id: 1,
        nome: 'Cliente 2',
        contato: '987-654-3210',
        pedido: {} as Pedido,
    },
];

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
        default:
            return state;
    }
};

export default clienteReducer;
