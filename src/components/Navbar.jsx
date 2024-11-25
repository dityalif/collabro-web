import React from 'react';

function Navbar() {
    return (
        <nav className='flex-col items-center'>
            <ul>
                <li><a href="#home">Home dasds</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;