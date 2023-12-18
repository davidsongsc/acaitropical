import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import '../visual/home.css';

const Home: React.FC = () => {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();
    return (
        <div className='principal-container'>
            <div className="principal-anuncio">
                <div className="cena">
                    <div className="propaganda">
                        <img src="https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg" alt="promo" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
