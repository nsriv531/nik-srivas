import React, { useState } from 'react';
import Modal from './Modal';
import "./App.css";

function Landing() {
  // State to manage the visibility of the modal
  //test
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gradient-to-r from-lavender-pink to-light-cyan min-h-screen flex flex-col justify-center items-center text-white text-center py-10">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Hi, I'm Nik!
      </h1>
      <h2 className="text-xl font-light text-gray-800">
        I'm a Software + Data Developer, and a leader in STEM education.
      </h2>
      {/* Conditional rendering of the Modal component */}
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default Landing;
