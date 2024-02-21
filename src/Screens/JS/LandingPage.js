import React, { useState } from 'react'
import '../CSS/LandingPage.css'
import Logo from '../../Assets/T Technovation.png'
import igitLogo from '../../Assets/IgitLogo.png'
import LandingTitle from '../../Assets/WhiteFontTitle.jpg'
import { Link } from "react-router-dom";
import ModalContent from './ModalContent'

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className='fullPage'>
      <img className='logo' src={Logo} alt='logo'></img>
      <img className='igitLogo' src={igitLogo} alt='igitLogo'></img>
      <div className='LandingTitleT'>
        <img className='LandingTitle' src={LandingTitle} alt='LandingTitle'></img>
       
      </div>
          <div id='explore-Btn'>
            < Exploring />
          </div>
      <nav class="navbar fixed-bottom">
        <div class="container-fluid">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <Link to='/signup'>
                <button className='bubbly-button'>Sign Up</button>
                </Link>
              </div>
              <div class="col">
                {/* <button  onClick={()=> setIsOpen(true)} className='bubbly-button'>Explore</button>
                <ModalContent open={isOpen} onClose={()=> setIsOpen(false)}/> */}
              </div>
              <div class="col">
                <Link to='/login'>
                  <button className='bubbly-button'>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>


  )
}

export default LandingPage