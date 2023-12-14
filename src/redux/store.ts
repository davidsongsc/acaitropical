import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers';
import galeriaReducer from './galeriaProdutosReducer';
import tipoDesejadoReducer from './tipoDesejadoReducer';
import clienteReducer from './clienteReducer';

const rootReducer = combineReducers({
    contador: counterReducer,
    galeriaProdutos: galeriaReducer,
    tipoDesejado: tipoDesejadoReducer,
    cliente: clienteReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;