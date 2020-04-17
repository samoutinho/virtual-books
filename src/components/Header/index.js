import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

import logo from './../../assets/book.png';

export default function Header() {
    //const cartSize = useSelector(state => state.cart.lenght);

    const cartSize = useSelector(state =>
        state.cart.lenght

    );

    return (
        <header className="header">
            <Link to='/' className="logo">
                <img className="logo-icon" src={logo} alt="Vai pra home!" />
                <span className="logo-text">OneBitBooks</span>
            </Link>

            <Link to="/cart" className="header-cart">
                <div>
                    <strong>Sacola</strong>
                    <span>
                        <strong>{cartSize}</strong> livros
                    </span>
                </div>
                <FiShoppingBag size={36} color="#fff" />
            </Link>
        </header>
    );
}