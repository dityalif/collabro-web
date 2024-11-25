import React from 'react';

function PostCard({ item }) {
    return (
        <div className='bg-white rounded-2xl shadow-xl p-4 w-full mb-5'>
            <img src={item.img} className='w-full h-auto rounded-t-2xl shadow-lg' alt='Picture'/>
            <h2 className='text-xl font-extrabold mt-4'>{item.title}</h2>
            <div className='flex'>
                <p className='text-gray-600 mt-2 mr-2'>Looking For: </p>
                <p className='text-green-600 text-sm font-medium mt-2 ml-1 border-2 border-green-600 rounded-full px-1'>UI/UX Designers</p>
            </div>
            <p className='text-black mt-2'>{item.desc}</p>
        </div>
    );
};

export default PostCard;