import React from 'react'
import './Exploring.css'
import { Link } from 'react-router-dom'

function Exploring() {
    return (
        <div>
            <div class="menu">
                <input type="checkbox" id="toggle" className='exploring'/>
                <label id="show-menu" for="toggle">
                    <div class="btn">
                        <i class="material-icons md-36 toggleBtn menuBtn">explore</i>
                        <i class="bi bi-x-circle-fill  toggleBtn closeBtn" ></i>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/about'>
                            <i class="bi bi-house"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/events'>
                            <i class="bi bi-calendar-event"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/contact'>
                            <i class="bi bi-geo-alt-fill"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/team'>
                            <i class="bi bi-people-fill"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/faq'>
                            <i class="bi bi-patch-question-fill"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/gallery'>
                            <i class="bi bi-images"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/cart'>
                            <i class="bi bi-cart"></i>
                        </Link>
                    </div>
                    <div class="btn">
                        <Link style={{ zIndex: '2001', height: '30px', width: '30px', textDecorationLine: 'none' }} to='/trailer'>
                            <i class="bi bi-camera-reels-fill"></i>
                        </Link>
                    </div>
                </label> </div>
        </div>
    )
}

export default Exploring