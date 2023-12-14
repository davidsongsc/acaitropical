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