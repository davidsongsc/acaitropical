import {  Carrinho } from './types';

interface CarrinhoState {
  carrinhos: Carrinho[];
}

const initialState: CarrinhoState = {
  carrinhos: [],
};


const carrinhoReducer = (state: CarrinhoState = initialState, action: any) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default carrinhoReducer;
