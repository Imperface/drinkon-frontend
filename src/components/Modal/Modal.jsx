import React, { useEffect, useState } from 'react';

import { StyledModal } from './Modal.styled';
const Modal = ({ modalData, closeModal }) => {
    const [counter, setCounter] = useState(1);
  
    useEffect(() => {
      const handleKeyDown = event => {
        if (event.code === 'Escape') {
          closeModal();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }, [closeModal]);
  
    useEffect(() => {
      console.log('Product counter value: ' + counter);
    }, [counter]);
  
    const handleIncrementProduct = () => {
      setCounter(prevState => prevState + 1);
      // setCounter(counter + 1);
    };
  
    const handleOverayClick = event => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };
  
    return (
      <StyledModal onClick={handleOverayClick}>
        <div className="modal">
          <button onClick={closeModal} className="closeBtn">
            ❌
          </button>
          <h2>Product Details</h2>
          <div>
            <h3>Title: {modalData.title}</h3>
            <p>Price: {modalData.price}$</p>
            <p>Discount: {modalData.discount}$</p>
            <button onClick={handleIncrementProduct}>
              Add product: {counter}
            </button>
          </div>
        </div>
      </StyledModal>
    );
  };
  
  export default Modal;