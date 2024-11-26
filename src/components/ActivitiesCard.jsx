import React from 'react';
import RecentCard from './RecentCard';
import { desc, title, u } from 'framer-motion/client';
import FriendCard from './FriendCard';

function ActivitiesCard({ item }) {
    const recentcard = [
        {
            img: '/Recent/capwan.png',  
            title: 'capwan applied to ur project!',
            time: '3 min ago',
            desc: 'Halo ulil! saya kebetulan tertarik dengan proyekmu apakah ada waktu bertemu...',
        },
        {
            img: '/Recent/raditya.png',
            title: 'raditya dika likes ur comp!',
            time: '3 min ago',
        },
        {
            img: '/Recent/maboirivi.png',
            title: 'maboirivi applied to ur project!',
            time: '3 min ago',
            desc: 'Halo ulil! saya kebetulan tertarik dengan proyekmu apakah ada waktu bertemu...',
        }
    ];

    const friendcard = [
        {
            img: '/Recent/esun.png',
            name: 'Esun',
            uname: '@esun',
            role: 'UI/UX Designers'
        },
        {
            img: '/Recent/ssantario.png',
            name: 'Rivi Yasha',
            uname: '@maboirivi',
            role: 'UI/UX Designers'
        },
        {
            img: '/Recent/ditya.png',
            name: 'Ditya',
            uname: '@raditss',
            role: 'Web Development'
        }
    ];

    return (
        <div className='bg-green-50 rounded-3xl p-5 w-full'>
            {/* Recent Card */}
            <h2 className='font-bold text-2xl mb-5'>Recent Activities</h2>
            {recentcard.map((item, index) => (
                <RecentCard key={index} item={item} />
            ))}
            
            {/* Friend Suggestion */}
            <h2 className='font-bold text-2xl mb-5'>Friend Suggestion</h2>
            {friendcard.map((item, index) => (
                <FriendCard key={index} item={item} />
            ))}
        </div>
    );
};

export default ActivitiesCard;