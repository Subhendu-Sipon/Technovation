import React from 'react'
import Headings from '../../Components/Headings'
import '../CSS/AboutPage.css'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
      <div className='aboutpagebg'>
        <div class="aboutcontainer">
          <Headings name='About IGIT Technovation 2K24'/>
        <p className='smallHeadings'>Innovate, Collaborate, Inspire:</p>
        <p>At IGIT, our annual TECHNOVATION is a vibrant celebration of innovation, collaboration, and inspiration. We believe in providing a platform where students, tech enthusiasts, and industry professionals can come together to explore the latest advancements and engage in meaningful discussions.</p>
        <p className='smallHeadings'>Experience the Future, Today:</p>
        <p>Step into the future of technology at IGIT TECHNOVATION 2K24! From captivating keynote speeches by industry leaders to hands-on workshops and hackathons, every aspect of our event is designed to immerse participants in the forefront of technological innovation.</p>
        <p className='smallHeadings'>Connect, Learn, Grow:</p>
        <p>At IGIT, we believe that collaboration is the key to unlocking endless possibilities. Our Technovation provides invaluable networking opportunities where participants can connect with peers, mentors, and industry experts.  </p>
        <div class="copyright-notice">
            <p>Copyright © 2024 IGIT Technovation. All Rights Reserved.</p>
        </div>
                  
        <Link to='/'>
            <button className='bubbly-button'>Back</button>
        </Link>
    </div>
    </div>
  )
}

export default AboutPage