import React from 'react';

function PostCard({ item }) {
    return (
        <div className='bg-white rounded-3xl shadow-xl w-full mb-5'>
            <img src={item.img} className='w-full h-auto rounded-t-2xl shadow-lg' alt='Picture'/>
            <div className='px-5 pb-5'>
                <h2 className='text-2xl font-extrabold mt-4'>{item.title}</h2>
                <p className='text-black mt-2'>{item.desc}</p>
                <div className='flex py-2 justify-between'>
                    <div className='flex'>
                        <p className='text-gray-600 mt-2 mr-2'>Looking For: </p>
                        <p className='text-green-600 text-sm font-medium mt-2 ml-1 border-2 border-green-600 rounded-full px-1 text-center'>UI/UX Designers</p>
                    </div>
                    
                    <a href='#' className='text-white font-bold px-4 bg-green-600 rounded-xl text-center p-2 hover:scale-110 active:scale-90 transition'>Apply</a>
                </div>
            
            </div>
                
        </div>
    );
};

export default PostCard;