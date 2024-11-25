import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import ActivitiesCard from "../components/ActivitiesCard";

function HomePage() {
    const navbar = [
        {
            linkHome: '/home',
            home: '/Navbar/homeActive.png',
            linkNoti: '/notification',
            noti: '/Navbar/notification.svg',
            linkProfile: '/profile',
            profile: '/Navbar/profile.svg'
        }
    ]
    const postcards = [
        {
            img: '/Home/LesunHome.png',
            title: 'Lomba Innoverse',
            desc: 'Hi ! Kami adalah sebuah tim dari Universitas Indonesia, sedang mencari UI/UX designers untuk lomba ... see more'
        },
        {
            img: '/Home/OlimHome.png',
            title: 'Lomba OLIM Ulil',
            desc: 'Hi ! Kami adalah sebuah tim dari Universitas Indonesia, sedang mencari UI/UX designers untuk lomba ... see more'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-200 to-green-50 font-figtree">
            {/* Header */}
            <header className="w-full flex items-center justify-between p-6 mb-9">
                {/* Profile */}
                <div className="flex items-center">
                    <img src="/ProfileUlil.png" className="w-16 h-16 rounded-full"/>
                    <div className="flex flex-col ml-5">        
                        <h2 className="font-bold text-2xl">Hello, LilAbshar</h2>
                        <p className="">Let's make a new achievement</p>
                    </div>
                </div>
                {/* Search Bar */}
                <div className="relative mx-4 w-96">
                    <input type="text" placeholder="Find your next opportunities..." className="text-sm w-full p-2 pl-10 rounded-full h-11"/>
                    <img src="/search.svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"/>
                </div>
                {/* Location */}
                <div className="justify-start">
                    <p className="font text-xl">Location</p>
                    <div className="flex items-center">
                        <img src="/location.svg" className="w-6 h-6 pr-2"/>
                        <p className="font-bold text-2xl">Depok, Indonesia</p>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <div className="flex flex-grow">
                {/* Navbar */}
                <div className="flex-none w-14 flex items-center justify-start mx-7">
                    {navbar.map((item, index) => (
                        <Navbar key={index} item={item} />
                    ))}
                </div>
                {/* Content */}
                <div className="flex-grow flex flex-col items-center justify-start">
                    <div className="flex items-start">
                        {/* Main */}
                        <main className="flex flex-col items-center justify-start">
                            {postcards.map((item, index) => (
                                <PostCard key={index} item={item} />
                            ))}
                        </main>
                        {/* Activities */}
                        <aside className="ml-8">
                            <ActivitiesCard />
                        </aside>
                    </div>
                    {/* Footer */}
                    <footer>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default HomePage;