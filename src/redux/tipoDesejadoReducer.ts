import { TipoDesejadoAction } from "./actions";

const initialState: string | null = 'Açai';

const tipoDesejadoReducer = (state: string | null = initialState, action: TipoDesejadoAction) => {
    switch (action.type) {
        case 'SET_TIPO_DESEJADO':
            return action.payload;
        default:
            return state;
    }
};

export default tipoDesejadoReducer;
