import React, {useState} from 'react'
import '../CSS/Modal.css'
import ModalContent from './ModalContent'

function Modal() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <div>
      <div id='buttonOpen'>
        <button onClick={()=> setIsOpen(true)}>Open</button>
        <ModalContent open={isOpen} onClose={()=> setIsOpen(false)}>
          Hii
        </ModalContent>
      </div>
      <div id='buttonContent'>
       <h6 id='textContent'>Hello World</h6>
      </div>
    </div>
  )
}

export default Modal