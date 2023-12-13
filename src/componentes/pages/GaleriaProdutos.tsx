import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions';

const GaleriaDeProdutos: React.FC = () => {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Página Inicial</h2>
            <h1>Contador: {count}</h1>
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
        </div>
    );
};

export default GaleriaDeProdutos;
