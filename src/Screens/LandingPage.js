import React from 'react'
import './LandingPage.css'
import Logo from '../Assets/T Technovation.png'
import igitLogo from '../Assets/IgitLogo.png'
import LandingTitle from '../Assets/WhiteFontTitle.jpg'
import BubblyButton from '../Components/BubblyButton'
import { Link } from "react-router-dom";

 const LandingPage = () => {
  return (
    <section className='fullPage'>   
        <img className='logo' src={Logo} alt='logo'></img>
        <img className='igitLogo' src={igitLogo} alt='igitLogo'></img>
        <div className='LandingTitleT'>
            <img className='LandingTitle' src={LandingTitle} alt='LandingTitle'></img>
        </div>
        <nav class="navbar fixed-bottom">
          <div class="container-fluid">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <BubblyButton name='Sign Up' path='/signup' />
              </div>
              <div class="col">
                <BubblyButton name='Explore' path='/about' />
              </div>
              <div class="col">
                <BubblyButton name='Login' />
              </div>
            </div>
          </div>
          </div>
        </nav> 
    </section> 
    
    
  )
}

export default LandingPage