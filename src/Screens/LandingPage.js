import React from 'react'
import './LandingPage.css'
import Logo from '../Assets/T Technovation.png'
import igitLogo from '../Assets/IgitLogo.png'
import LandingTitle from '../Assets/WhiteFontTitle.jpg'
import BubblyButton from '../Components/BubblyButton'

function LandingPage() {
  return (
    
    <section className='fullPage'>   
        <img className='logo' src={Logo} alt='logo'></img>
        <img className='igitLogo' src={igitLogo} alt='igitLogo'></img>
        <div className='LandingTitleT'>
            <img className='LandingTitle' src={LandingTitle} alt='LandingTitle'></img>
        </div>
        <div id='BottomButtons'>
          <div id='BottomButtonsLeft'>
          <BubblyButton name='Sign Up'/>
          </div>
          <div id='BottomButtonsRight'>
          <BubblyButton name='Login'/>
          </div>
          <div id='BottomButtonsMiddle'>
            <BubblyButton name='Explore'/>
          </div>
        </div>
    </section> 

  )
}

export default LandingPage