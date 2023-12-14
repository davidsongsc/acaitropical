import { Cliente, SET_CLIENTES } from "./types";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// actions/tipoDesejadoActions.ts
export const setTipoDesejado = (tipo: string) => {
    return {
        type: 'SET_TIPO_DESEJADO' as const,
        payload: tipo,
    };
};

// reducers/tipoDesejadoReducer.ts
export type TipoDesejadoAction = {
    type: 'SET_TIPO_DESEJADO';
    payload: string;
};



export const setClientes = (clientes: Cliente) => ({
  type: SET_CLIENTES,
  payload: clientes,
});