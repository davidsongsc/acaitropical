import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import '../visual/galeriaProdutos.css';

const GaleriaDeProdutos: React.FC = () => {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();
    return (
        <div className='galeria-produtos'>
            <h4>Página Inicial</h4>
            <h1>Contador: {count}</h1>
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
        </div>
    );
};

export default GaleriaDeProdutos;
