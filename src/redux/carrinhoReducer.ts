import { ADICIONAR_PRODUTO_CARRINHO, Carrinho, Produto, REMOVER_PRODUTO_CARRINHO } from './types';

interface CarrinhoState {
  carrinhos: Carrinho[];
}

const initialState: CarrinhoState = {
  carrinhos: [],
};

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

const carrinhoReducer = (state: CarrinhoState = initialState, action: any) => {
  switch (action.type) {
    case ADICIONAR_PRODUTO_CARRINHO:
      const { carrinhoId, produto } = action.payload;
      const carrinhoExistente = state.carrinhos.find((c) => c.id === carrinhoId);

      if (carrinhoExistente) {
        const produtoExistente = carrinhoExistente.produtos.find(
          (p) => p[0].id === produto.id
        );

        if (produtoExistente) {
          produtoExistente[1] += 1; // Assuming you always add 1 quantity
        } else {
          carrinhoExistente.produtos.push([produto, 1]);
        }

        return {
          ...state,
          carrinhos: [...state.carrinhos],
        };
      }
      return state;

    case REMOVER_PRODUTO_CARRINHO:
      const { carrinhoIdToRemove, produtoIdToRemove } = action.payload;
      const carrinhoComProduto = state.carrinhos.find(
        (c) => c.id === carrinhoIdToRemove
      );

      if (carrinhoComProduto) {
        carrinhoComProduto.produtos = carrinhoComProduto.produtos.filter(
          (p) => p[0].id !== produtoIdToRemove
        );

        return {
          ...state,
          carrinhos: [...state.carrinhos],
        };
      }
      return state;

    default:
      return state;
  }
};

export default carrinhoReducer;
