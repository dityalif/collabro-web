import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import Banana from '../assets/Profile/Bananas.png';
import ulil from '../assets/Profile/lil.png';
import lokasi from '../assets/Profile/vectorLokasi.svg';
import instagram from '../assets/Profile/vectorInstagram.svg';
import twitter from '../assets/Profile/vectorTwitter.svg';
import behance from '../assets/Profile/vectorBehance.svg';
import linkedin from '../assets/Profile/vectorLinkedin.svg';
import starFull from '../assets/Profile/star2_icon.svg';
import starHalf from '../assets/Profile/starHalf1_icon.svg';
import starEmpty from '../assets/Profile/star_half.png';
import CompetitionCard from "../components/CompetitionCard.jsx";
import cross from "../assets/Profile/x.svg";
import kotak from "../assets/Profile/kotak.svg";
import kotakmodal from "../assets/Profile/kotakModal.svg";
import post from "../assets/Profile/post.svg";
import SearchBar from "../components/SearchBar.jsx";
// import RecentCard from "../components/RecentCard.jsx";
// import FriendCard from "../components/FriendCard.jsx";
import ActivitiesCard from "../components/ActivitiesCard.jsx";


Modal.setAppElement('#root');

function Profile() {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Esun");
    const [location, setLocation] = useState("Depok, Indonesia");
    const [specialty, setSpecialty] = useState("UI/UX Designer");
    const [description, setDescription] = useState("Saya programmer yang tertarik di bidang web, terutama frontend, saya ingin ikut serta dalam berbagai proyek yang menantang dan mengembangkan keterampilan saya.");
    const rating = 4;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitleValue, setModalTitleValue] = useState('');
    const [modalDescriptionValue, setModalDescriptionValue] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSave = () => {
        setIsEditing(false);
    };
    const handleApply = () => alert("You clicked Apply!");

    const handleTagSelect = (tag) => {
        setSelectedTags([...selectedTags, tag]);
    };

    const handleTagRemove = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };

    const [competitionData, setCompetitionData] = useState([
        {
            image: "/fotoLomba.png",
            modal : "/modalLomba.png",
            title: "Lomba Innoverse",
            description: "Saya programmer yang tertarik di bidang web, terutama frontend.",
            tags: ["Tech", "Web Development"],
            avatars: [
                "/avatar.png",
                "/avatar-1.png",
                "/avatar-2.png",
                "/avatar-3.png",
            ],
        },
        {
            image: "/fotoProject.png",
            modal : "/modalLomba.png",
            title: "Project Innoverse",
            description: "Saya programmer yang tertarik di bidang web, terutama frontend.",
            tags: ["Tech", "Web Development"],
            avatars: [
                "/avatar.png",
                "/avatar-1.png",
                "/avatar-2.png",
                "/avatar-3.png",
            ],
        },
        {
            image: "/fotoProject.png",
            modal : "/modalLomba.png",
            title: "Project Innoverse",
            description: "Saya programmer yang tertarik di bidang web, terutama frontend.",
            tags: ["Tech", "Web Development"],
            avatars: [
                "/avatar.png",
                "/avatar-1.png",
                "/avatar-2.png",
                "/avatar-3.png",
            ],
        },
    ]);



    const handlePost = () => {
        const newCompetition = {
            image: "/fotoProject.png",
            modal: "/modalLomba.png",
            title: modalTitleValue,
            description: modalDescriptionValue,
            tags: selectedTags,
            avatars: [
                "/avatar.png",
                "/avatar-1.png",
                "/avatar-2.png",
                "/avatar-3.png",
            ],
        };
        setCompetitionData([...competitionData, newCompetition]);
        setModalTitleValue('');
        setModalDescriptionValue('');
        setSelectedTags([]);
        closeModal();
    };

    const renderCompetitionCards = () => {
        return competitionData.map((competition, index) => (
            <CompetitionCard
                key={index}
                image={competition.image}
                modal={competition.modal}
                title={competition.title}
                description={competition.description}
                tags={competition.tags}
                avatars={competition.avatars}
                onApply={handleApply}
            />
        ));
    };




    return (
        <div className="relative w-full h-screen font-figtree overflow-auto flex flex-col lg:flex-row">
            <div
                className="absolute top-0 left-0 w-full h-36 "
                style={{
                    backgroundImage: `url(${Banana})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <button onClick={() => navigate('/home')}>
                    <svg className="mt-8 ml-8  hover: transition-transform duration-300 transform hover:scale-110" width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1375 23.17L1 12.085M1 12.085L11.1375 1M1 12.085L25.33 12.085" stroke="#00AA5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="parent p-8 pb-10 flex-1">
                <div className="orang flex flex-col lg:flex-row items-start lg:relative top-[50px] pb-10 text-black mt-10">
                    <img
                        src='/Profile/Esun.png'
                        alt="Example"
                        className="scale-90 rounded-full mb-2"
                    />
                    <div className="info flex flex-col items-start ml-0 lg:ml-8 mt-4 lg:mt-0">
                        <div className="flex items-center">
                            <img src={lokasi} alt="Location" className="w-4 h-4 mr-1" />
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="city text-greyy text-sm"
                                />
                            ) : (
                                <p className="city text-greyy text-sm lg:text-sm sm:text-xxs">{location}</p>
                            )}
                        </div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="font-figtree text-3xl font-extrabold mt-1"
                            />
                        ) : (
                            <p className="font-figtree text-3xl font-extrabold mt-1 lg:text-3xl sm:text-xxs">{name}</p>
                        )}
                        {isEditing ? (
                            <input
                                type="text"
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                                className="specialty text-greyish opacity-60 mt-1"
                            />
                        ) : (
                            <p className="specialty text-greyish opacity-60 mt-1 lg:text-sm sm:text-xxs">{specialty}</p>
                        )}
                        <div className="links flex flex-row mt-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="w-7 h-7 mr-8 hover: transition-transform duration-300 transform hover:scale-110" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" className="w-7 h-7 mr-8 hover: transition-transform duration-300 transform hover:scale-110" />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                <img src={behance} alt="Behance" className="w-7 h-7 mr-8 hover: transition-transform duration-300 transform hover:scale-110" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 mr-8 hover: transition-transform duration-300 transform hover:scale-110" />
                            </a>
                        </div>
                        <div className="deskripsi-container mt-4 text-sm flex items-center">
                            {isEditing ? (
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="deskripsi max-w-full min-w-72"
                                    style={{  width: '', textAlign: 'left', height: '150px', resize: 'none' }}
                                />
                            ) : (
                                <p className="deskripsi lg:text-sm sm:text-xxs" style={{ maxWidth: '500px', textAlign: 'left' }}>
                                    {isExpanded ? description : `${description.substring(0, 75)}...`}
                                    {isExpanded && (
                                        <button 
                                            className="text-greyy ml-2 hover:text-green-400 duration-300 transition-transform transform hover:scale-105"
                                            onClick={() => setIsExpanded(false)}
                                        >
                                            See Less
                                        </button>
                                    )}
                                </p>
                            )}
                            {!isExpanded && !isEditing && (
                                <button 
                                    className="text-greyy ml-2 hover:text-green-400 transition-transform  duration-300 transform hover:scale-105"
                                    onClick={() => setIsExpanded(true)}
                                >
                                    See More
                                </button>
                            )}
                        </div>
                        <div className="stars mt-4 flex">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < rating ? starFull : starEmpty}
                                    alt="star icon"
                                    className="w-5 h-5 mr-1 hover:scale-110 transition-transform duration-300"
                                />
                            ))}
                        </div>
                        {isEditing ? (
                            <button
                                className="editProfile mt-3 bg-darkGreen text-white py-1.5 px-4 font-bold text-sm rounded-xl hover:scale-105 duration-300"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                className="editProfile mt-3 bg-darkGreen text-white py-1.5 px-4 font-bold text-sm rounded-xl hover:scale-105 duration-300"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profile
                            </button>
                        )}
                        <button className="mt-8">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="12.5122" height="12.5122" rx="1.97561" fill="#D9D9D9"/>
                            <rect x="14.488" width="12.5122" height="12.5122" rx="1.97561" fill="#D9D9D9"/>
                            <rect x="14.488" y="14.4878" width="12.5122" height="12.5122" rx="1.97561" fill="#D9D9D9"/>
                            <rect y="14.4878" width="12.5122" height="12.5122" rx="1.97561" fill="#D9D9D9"/>
                            </svg>
                        </button>
                        {/* BISA DIJADIIN COMPONENT */}
                        <div className="Past Experience grid grid-cols-1 md:grid-cols-2 gap-6">
                            {renderCompetitionCards()}
                            <button onClick={openModal} className="createOpp w-auto text-left hover:scale-105 duration-500">
                                <div className="max-w-sm rounded-3xl drop-shadow-lg shadow-black overflow-hidden mt-6 bg-white">
                                    <img src={kotak} alt="Competition" className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h2 className="text-2xl font-extrabold mb-2">Create New Opportunity</h2>
                                    </div>
                                </div>
                            </button>
                        </div>
                        {/* BISA DIJADIIN COMPONENT */}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Competition Details"
                            className="rounded-3xl bg-white max-w-4xl w-full h-5/6 overflow-auto font-figtree"
                            overlayClassName="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
                        >
                            <div className="">
                            <img src={kotakmodal} alt="new op" className="w-full h-56 object-cover mb-4" />
                            <div className=' px-8 py-3'>
                                <p className="text-sm text-greyy ml-1">Title</p>
                                <input
                                    type="text"
                                    value={modalTitleValue}
                                    onChange={(e) => setModalTitleValue(e.target.value)}
                                    className="title text-greyy text-sm p-2 border-greenish border-2 rounded-xl bg-light"
                                />
                                <p className="text-sm text-greyy ml-1 mt-2">Description</p>
                                <input
                                    type="text"
                                    value={modalDescriptionValue}
                                    onChange={(e) => setModalDescriptionValue(e.target.value)}
                                    className="desc text-greyy text-sm p-2 border-greenish border-2 rounded-xl w-full md:w-1/2 bg-light"
                                />
                                <div className="mt-10">
                                    <p className="opacity-60 ml-1">What are you looking for: </p>
                                    <div className="selected-tags flex flex-wrap mb-2">
                                        {selectedTags.map((tag, index) => (
                                            <span key={index} className="bg-green-200 text-green-800 px-2 py-1 rounded-full mr-2 mb-2 flex items-center">
                                                {tag}
                                                <img
                                                    src={cross}
                                                    alt="Remove"
                                                    className="ml-2 cursor-pointer"
                                                    onClick={() => handleTagRemove(tag)}
                                                />
                                            </span>
                                        ))}
                                    </div>
                                    <SearchBar onTagSelect={handleTagSelect} />
                                </div>
                                <div className="flex justify-end mt-8">
                                <button onClick={handlePost} className="bg-greenish font-bold text-2xl hover:bg-darkGreen duration-300 transition-transform hover:scale-110 text-white px-4 py-1 rounded-xl flex items-center">
                                    <img src={post} className="mr-2" alt="Post" />
                                    <p>Post</p>
                                </button>
                                </div>
                            </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="kanan w-full lg:w-1/4 mt-40 mr-8">
                <div className="">
                    <ActivitiesCard />
                </div>
            </div>
        </div>
    );
}

export default Profile;
