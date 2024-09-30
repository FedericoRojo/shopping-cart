import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Header.css'; 

const Header = () => {
    const navigate = useNavigate(); 

    return (
        <header className="header">
            <button 
                className="left-button" 
                onClick={() => navigate('/')} 
            >
                Shop
            </button>
            <h1 className="title">Shopping</h1>
            <button 
                className="right-button" 
                onClick={() => navigate('/cart')} 
            >
                Cart
            </button>
        </header>
    );
};

export default Header;
