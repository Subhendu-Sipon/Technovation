import React from 'react'
import './Heading.css'

function Headings(props) {
  return (
    <div>
        <h1 className='heading'>{props.name}</h1>
    </div>
  )
}

export default Headings