import React from 'react';
import { Link } from "react-router-dom";
import './index.css'


const Filials = () => {
    return (
        <div className='filials'>
            <div className="filialsWrapper">
                <div className="tittle">Наши филиалы</div>
                <div className="divForLinks">
                    <Link to='#'> <div className='links'>Бишкек</div></Link>
                    <Link to='#'> <div className='links'>Ош</div></Link>
                    <Link to='#'> <div className='links'>Ыссык-Куль</div></Link>
                    <Link to='#'> <div className='links'>Джалал-Абад</div></Link>
                    <Link to='#'> <div className='links'>Талас</div></Link>
                    <Link to='#'> <div className='links'>Нарын</div></Link>
                    <Link to='#'> <div className='links'>Баткен</div></Link>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Filials;