import React from 'react'
import './LandingPage.css'
import Logo from '../Assets/T Technovation.png'
import igitLogo from '../Assets/IgitLogo.png'

function LandingPage() {
  return (
    <section className='fullPage'>   
    <img className='logo' src={Logo} alt='logo'></img>
    <img className='igitLogo' src={igitLogo} alt='igitLogo'></img>
    </section> 
    
  )
}

export default LandingPage