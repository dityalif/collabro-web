import React, { useState } from 'react';
import Modal from 'react-modal';

const CompetitionCard = ({ image, modal, title, description, tags, avatars }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="w-full font-figtree text-left hover:scale-105 duration-500">
        <div className="max-w-full md:max-w-sm rounded-3xl drop-shadow-lg shadow-black overflow-hidden mt-6 bg-white">
          <img src={image} alt="Competition" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-extrabold mb-2">{title}</h2>
            <p className="text-black text-s max-w-44 mb-4">{description}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="lg:px-4 lg:py-0.5 sm: px-1 py-1 bg-white text-greenish text-xs rounded-full border-opacity-100 border-greenish border-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="avatar flex -space-x-2.5 lg:-space-x-2.5 sm:space-x-0">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index}`}
                    className="w-10 h-10 rounded-full border-4 border-white lg:w-10 lg:h-10 sm:w-8 sm:h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Competition Details"
        className="rounded-3xl bg-white max-w-4xl w-full h-5/6 overflow-auto font-figtree p-4 md:p-8"
        overlayClassName="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="">
          <img src={modal} alt="Competition" className="w-full h-56 object-cover mb-4" />
          <div className='px-4 py-3 md:px-8'>
            <div className="originalPoster flex flex-col md:flex-row">
              <img
                src="/esun.png"
                alt="Example"
                className="w-16 h-16 rounded-full mb-4"
              />
              <div className='ml-0 md:ml-4'>
                <p className='font-bold'>Esun</p>
                <p className='text-cursedGrey text-sm mb-1'>@Sunnn</p>
                <span className='px-3 py-1 bg-white text-greenish text-xs rounded-full border-opacity-100 border-greenish border-2'>Frontend Developer</span>
                <span className='px-3 py-1 bg-white text-greenish text-xs rounded-full border-opacity-100 border-greenish border-2 ml-0 md:ml-4'>Computer Engineering</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-black text-sm md:text-md lg:text-sm sm:text-xxs mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eligendi voluptatibus nemo sed quos voluptas consequuntur beatae illo fugit quia, assumenda veritatis architecto. Voluptates quae reprehenderit voluptatibus odio eaque officia?</p>
            <div className="flex gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-0.5 bg-white text-greenish text-xs lg:text-xs sm:text-xxs rounded-full border-opacity-100 border-greenish border-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="avatar flex -space-x-2.5 lg:-space-x-2.5 sm:space-x-0 mb-4">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index}`}
                  className="w-10 h-10 rounded-full border-4 border-white lg:w-10 lg:h-10 sm:w-8 sm:h-8"
                />
              ))}
            </div>
            <button onClick={closeModal} className="bg-greenish hover:bg-darkGreen duration-300 transition-transform hover:scale-110 text-white px-4 py-2 rounded-xl">
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CompetitionCard;