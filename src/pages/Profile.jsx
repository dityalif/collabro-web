import React, { useState } from "react";
import Banana from '../assets/Profile/Bananas.png';
import ulil from '../assets/Profile/lil.png';
import lokasi from '../assets/Profile/vectorLokasi.svg';
import instagram from '../assets/Profile/vectorInstagram.svg';
import twitter from '../assets/Profile/vectorTwitter.svg';
import behance from '../assets/Profile/vectorBehance.svg';
import linkedin from '../assets/Profile/vectorLinkedin.svg';

function Profile() {
    const [isExpanded, setIsExpanded] = useState(false);
    const description = "Saya programmer yang tertarik di bidang web, terutama frontend, saya ingin ikut serta dalam berbagai proyek yang menantang dan mengembangkan keterampilan saya.";

    return (
        <div className="relative w-full h-screen font-figtree">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url(${Banana})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* SVG Wave */}
            <div className="wavybaby mt-32 absolute top-0 left-0 w-full h-auto overflow-hidden leading-none">
                <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 1440 913"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M479.408 24.2663C337.802 3.7026 224.424 -12.7617 50.9279 13.738C-159.936 45.9453 -106.137 114.665 -40.7345 179.678V913H1505.42V231.201C1556.16 183.806 1558.23 134.463 1449.43 102.178C1339.01 69.4127 1174.36 66.5602 1004.86 63.6238C910.654 61.9917 814.951 60.3336 726.235 53.4987C629.262 46.0275 550.752 34.6266 479.408 24.2663Z"
                        fill="white"
                    />
                </svg>
                 {/* Konten di dalam SVG */}
                <div className="parent px-4">
                    <div className="orang flex items-start absolute top-[50px] text-black">
                        <img
                            src={ulil}
                            alt="Example"
                            className="w- h- rounded-full mb-2"
                        />
                        <div className="info flex flex-col items-start ml-4 ">
                            <div className="flex items-center">
                                <img src={lokasi} alt="Location" className="w-4 h-4 mr-1" />
                                <p className="city text-greyy text-sm">Depok, Indonesia</p>
                            </div>
                            <p className="font-figtree text-3xl font-extrabold mt-1">Ulil Abshar</p>
                            <p className="text-greyish opacity-60 mt-1">UI/UX Designer</p>
                            <div className="links flex flex-row mt-4">
                                <a href="twitter.com">
                                    <img src={twitter} alt="Twitter" className="w-7 h-7 mr-8 hover: transition-transform duration-150 transform hover:scale-105" />
                                </a>
                                <a href="instagram.com">
                                    <img src={instagram} alt="Instagram" className="w-7 h-7 mr-8" />
                                </a>
                                <a href="behance.com">
                                    <img src={behance} alt="Behance" className="w-7 h-7 mr-8" />
                                </a>
                                <a href="linkedin.com">
                                    <img src={linkedin} alt="LinkedIn" className="w-7 h-7 mr-8" />
                                </a>
                            </div>
                            <div className="deskripsi-container mt-4 text-sm flex items-center">
                                <p className="deskripsi" style={{ maxWidth: '500px', textAlign: 'left' }}>
                                    {isExpanded ? description : `${description.substring(0, 75)}...`}
                                    {isExpanded && (
                                        <button 
                                            className="text-greyy ml-2 hover:text-green-400 duration-150 transition-transform transform hover:scale-105"
                                            onClick={() => setIsExpanded(false)}
                                            
                                        >
                                            See Less
                                        </button>
                                    )}
                                </p>
                                {!isExpanded && (
                                    <button 
                                        className="text-greyy ml-2 hover:text-green-400 transition-transform  duration-150 transform hover:scale-105"
                                        onClick={() => setIsExpanded(true)}
                                    >
                                        See More
                                    </button>
                                
                                )}
                                <div>
                                    {/* StarIcon */}
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="kanan">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
