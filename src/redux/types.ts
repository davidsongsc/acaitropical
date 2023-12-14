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
    produtos: Produto[];
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
