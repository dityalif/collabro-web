import React from 'react';

function RecentCard({ item }) {
    return (
        <div className='bg-white p-3 flex-col rounded-2xl w-88 mb-5'>
            <div className='flex items-center'>
                <img src={item.img} className='w-16 h-auto rounded-2xl shadow-lg' alt='Picture'/>
                <h3 className='text-base font-bold px-5'>{item.title}</h3>
                <p className='text-sm text-green-600'>{item.time}</p>
            </div>
            <p className='mt-5'>{item.desc}</p>
            <p className='text-green-600'>Read More</p>
        </div>
    );
};

export default RecentCard;