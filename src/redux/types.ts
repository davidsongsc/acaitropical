export interface Logradouro {
    cep: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    bloco: string;
    ap: string;
    obs: string;
}
export interface DadosCliente{
    cadastroPessoaFisica: string;
    telefone1: number;
    telefone2: number;
    email: string;
}
export interface Cliente {
    id: number;
    nome: string;
    contato: string;
    pedido: Pedido;
    localEntrega: Logradouro[];
    info: DadosCliente;
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
export interface PromoTipo {
    nome: string;
    tipo: string;
    valor: number;
    porcentagem: number;
    cort: string;
    corf: string;
    font: string;
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    img: string;
    imgbg: string[];
    valor: number;
    quantidade: number;
    tipo: TipoProduto[];
    disponibilidade: number;
    dataHoraCriacao: string;
    idCriadorProduto: number;
    composicaoBasica: [Composicao[]],
    promo: PromoTipo[],
    volume: [string, number],
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
