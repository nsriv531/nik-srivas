import React from "react";

function Modal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>More Info Below...</h2>
        <p>I'm in my Third year of Computer Information Systems, and below you can find me on various socials:</p>
        <a href="https://www.linkedin.com/in/nik-srivastava/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px 0' }}>My LinkedIn</a>
        <a href="https://github.com/nsriv531" target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px 0' }}>My GitHub</a>
      </div>
    </div>
  );
}

export default Modal;
