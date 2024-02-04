import React from 'react'
import './ModalContent.css'
import { Link } from 'react-router-dom'

function ModalContent({open, onClose}) {
    if(!open) return null
    const closeButtonStyles = {
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '20px',
      backgroundColor: 'red',
      border: 'none'
    }
  return (
    <div className='modal-overlay'>
      <div id='ModalContentBox'>
        <ul class="list-group">
          <li class="list-group-item"><Link to='/events' className='modalLink'>Events</Link></li>
          <li class="list-group-item"><Link to='/merchandise' className='modalLink'>Merchandise</Link></li>
          <li class="list-group-item"><Link to='/trailer' className='modalLink'>Trailer</Link></li>
          <li class="list-group-item"><Link to='/gallery' className='modalLink'>Gallery</Link></li>
          <li class="list-group-item"><Link to='/about' className='modalLink'>About</Link></li>
          <li class="list-group-item"><Link to='/ourteam' className='modalLink'>Our Team</Link></li>
        </ul>
      </div>
      <button id='closeButton' style={closeButtonStyles} onClick={onClose}><i class="bi bi-x-lg">Close</i></button>
    </div>
  )
}

export default ModalContent