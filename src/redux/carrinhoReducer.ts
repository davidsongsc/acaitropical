import { ADICIONAR_PRODUTO_CARRINHO, REMOVER_PRODUTO_CARRINHO } from './types';

interface ProdutoNoCarrinho {
  id: number;
  quantidade: number;
}

export interface Carrinho {
  id: number;
  produtos: ProdutoNoCarrinho[];
}

interface CarrinhoState {
  carrinhos: Carrinho[];
}

const initialState: CarrinhoState = {
  carrinhos: [
    { id: 1, produtos: [{ id: 1, quantidade: 2 }] },
    { id: 2, produtos: [{ id: 2, quantidade: 1 }] },
  ],
};

const carrinhoReducer = (state: CarrinhoState = initialState, action: any) => {
  switch (action.type) {
    case ADICIONAR_PRODUTO_CARRINHO:
      const { carrinhoId, produto } = action.payload;
      // Verifica se o carrinho existe
      const carrinhoExistente = state.carrinhos.find((c) => c.id === carrinhoId);

      if (carrinhoExistente) {
        // Verifica se o produto já existe no carrinho
        const produtoExistente = carrinhoExistente.produtos.find((p) => p.id === produto.id);

        if (produtoExistente) {
          // Atualiza a quantidade do produto no carrinho
          produtoExistente.quantidade += produto.quantidade;
        } else {
          // Adiciona o produto ao carrinho
          carrinhoExistente.produtos.push(produto);
        }

        // Retorna um novo estado com as alterações
        return {
          ...state,
          carrinhos: [...state.carrinhos],
        };
      }
      // Se o carrinho não existir, retorna o estado atual
      return state;

    case REMOVER_PRODUTO_CARRINHO:
      const { carrinhoIdToRemove, produtoIdToRemove } = action.payload;
      // Encontra o carrinho que contém o produto a ser removido
      const carrinhoComProduto = state.carrinhos.find((c) => c.id === carrinhoIdToRemove);

      if (carrinhoComProduto) {
        // Filtra os produtos mantendo apenas aqueles que não têm o ID do produto a ser removido
        carrinhoComProduto.produtos = carrinhoComProduto.produtos.filter(
          (p) => p.id !== produtoIdToRemove
        );

        // Retorna um novo estado com as alterações
        return {
          ...state,
          carrinhos: [...state.carrinhos],
        };
      }
      // Se o carrinho ou o produto não existirem, retorna o estado atual
      return state;

    // ... outras ações
    default:
      return state;
  }
};

export default carrinhoReducer;
