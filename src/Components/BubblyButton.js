import React, { useEffect } from 'react';
import './BubblyButton.css';
import { Link } from 'react-router-dom';

const BubblyButtonsContainer = (props) => {
  const animateButton = (e) => {
    e.preventDefault();
    const button = e.target;
    button.classList.remove('animate');
    button.classList.add('animate');
    setTimeout(() => {
      button.classList.remove('animate');
    }, 700);
  };

  useEffect(() => {
    const bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }

    return () => {
      for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].removeEventListener('click', animateButton, false);
      }
    };
  }, []); 

  return (
    <div>
      <Link to={props.path}>
      <button className="bubbly-button">{props.name}</button>
      </Link>
    </div>
  );
};

export default BubblyButtonsContainer;