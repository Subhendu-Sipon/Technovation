import React from 'react';

const Modal = ({ isOpen, setIsOpen, handleDelete }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={() => setIsOpen(false)}>
      <div className='modal'>
        <div className='modal-content'>
          <p>Are you sure you want to delete the item?</p>
          <button onClick={() => { handleDelete(); setIsOpen(false); }}>Delete</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;