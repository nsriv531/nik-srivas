import React, { useState } from 'react';
import Modal from './Modal';
import "./App.css";

function Landing() {
  // State to manage the visibility of the modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="Landing">
      <h1>Hi, I'm <span onClick={toggleModal}>Nik</span>.</h1>
      <h2>
        I'm a Software Engineer, Game Developer, and a leader in STEM education.
      </h2>
      {/* Conditional rendering of the Modal component */}
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default Landing;