import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import '../visual/home.css';
import PromoImageGenerator from './PromoImagens';

const CatalogoCompomente: React.FC = () => {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();
    return (
        <div className='principal-container'>
            <div className="principal-anuncio">
                <div className="cena">
                    <div className="propaganda">
                        <PromoImageGenerator />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CatalogoCompomente;
