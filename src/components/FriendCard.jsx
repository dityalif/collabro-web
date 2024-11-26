import React from 'react';

function FriendCard({ item }) {
    return (
        <div className='bg-white p-5 flex rounded-2xl w-88 mb-5 items-center '>
            <img src={item.img} className='w-16 h-auto rounded-2xl shadow-lg' alt='Picture'/>
            <div className='flex flex-col ml-5 w-1/2'>
                <h2 className='font-semibold text-xl'>{item.name}</h2>
                <p className='text-gray-600'>{item.uname}</p>
            </div>
            <a href='#' className='text-white bg-green-600 rounded-2xl text-center p-2'>Add Friend</a>
        </div>
    );
};

export default FriendCard;