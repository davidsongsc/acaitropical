export interface Cliente {
    id: number;
    nome: string;
    contato: string;
    pedido: Pedido;

}


export interface ClienteTableProps {
    cliente: Cliente[];
}

export interface Pedido {
    id: number;
    carrinho: Carrinho[];
    dataHoraCriacaoCarrinho: string;
    dataHoraPedidoCarrinho: string;

}

export interface CarrinhoComprar {
    id: number;
}


export interface Carrinho {
    id: number;
    produtos: [Produto, number][];

}
export interface Composicao {
    tipo: TipoProduto;
    ingredientes: string[],
}
export interface PromoTipo{
    nome: string;
    tipo: string;
    valor: number;
    porcentagem: number;
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    img: string;
    valor: number;
    quantidade: number;
    tipo: TipoProduto[];
    disponibilidade: number;
    dataHoraCriacao: string;
    idCriadorProduto: number;
    composicaoBasica: [Composicao[]],
    promo: PromoTipo[],
}

export interface TipoProduto {
    id: number;
    nome: string;
}

export interface listaTodosProdutos {
    todosProdutos: Produto[]
}


export const SET_CLIENTES = 'SET_CLIENTES';
export const ADICIONAR_PRODUTO_CARRINHO = 'ADICIONAR_PRODUTO_CARRINHO';
export const REMOVER_PRODUTO_CARRINHO = 'REMOVER_PRODUTO_CARRINHO';
