import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ item }) {
    return (
        <nav className='relative flex items-center justify-center bg-white rounded-3xl w-16 h-48 shadow-2xl font-figtree'>
            <div className='absolute inset-0 bg-green-600 rounded-3xl -z-10 flex items-center justify-center'>
                <img src='./send.png' className='w-8 h-8' alt='Send'/>
            </div>
            <ul className='flex flex-col items-center justify-center h-full'>
                <li className='flex items-center justify-center my-4 mx-2 hover:scale-110 transition active:scale-90'>
                    <Link to={item.linkHome}>
                        <img src={item.home} className='w-8 h-8' alt='Home'/>
                    </Link>
                </li>
                <li className='flex items-center justify-center my-4 mx-2 hover:scale-110 transition active:scale-90'>
                    <Link to={item.linkNoti}>
                        <img src={item.noti} className='w-8 h-8' alt='Noti'/>
                    </Link>
                </li>
                <li className='flex items-center justify-center my-4 mx-2 hover:scale-110 transition active:scale-90'>
                    <Link to={item.linkProfile}>
                        <img src={item.profile} className='w-8 h-8' alt='Profile'/>
                    </Link>
                </li>
            </ul>    
        </nav>
    );
};

export default Navbar;