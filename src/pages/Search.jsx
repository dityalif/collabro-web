import React from "react";
import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard"
import ActivitiesCard from "../components/ActivitiesCard";

function HomePage() {
    const searchcard = [
        {
            img: '/Search/lesunSearch.png',
            title: 'Lomba Innoverse',
            desc: 'Hi ! Kami adalah sebuah tim dari Universitas Indonesia, sedang mencari UI/UX designers untuk lomba ... see more'
        },
        {
            img: '/Search/innoverseSearch1.png',
            title: 'Lomba Innoverse',
            desc: 'Hi ! Kami adalah sebuah tim dari Universitas Indonesia, sedang mencari UI/UX designers untuk lomba ... see more'
        },
        {
            img: '/Search/innoverseSearch2.png',
            title: 'Lomba Innoverse',
            desc: 'Hi ! Kami adalah sebuah tim dari Universitas Indonesia, sedang mencari UI/UX designers untuk lomba ... see more'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-200 to-green-50 font-figtree lg:w-full">
            {/* Header */}
            <header className="w-full flex items-center justify-between p-6 mb-9">
                {/* Profile */}
                <div className="flex items-center">
                    <a href="/profile">
                        <img src="/ProfileUlil.png" className="w-16 h-16 rounded-full hover:scale-110 transition"/>
                    </a>
                    <div className="flex flex-col ml-5">        
                        <h2 className="font-bold text-2xl">Hello, LilAbshar</h2>
                        <p className="">Let's make a new achievement</p>
                    </div>
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
                    <Navbar/>
                </div>
                {/* Content */}
                <div className="flex-grow flex flex-col items-center justify-start">
                    <div className="flex items-start">
                        {/* Main */}
                        <main className="flex flex-col items-center justify-start">
                            {searchcard.map((item, index) => (
                                <SearchCard key={index} item={item} />
                            ))}
                        </main>
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