import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions';

const Home: React.FC = () => {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            
        </div>
    );
};

export default Home;
