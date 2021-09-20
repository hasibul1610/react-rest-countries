import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Service">Service</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;