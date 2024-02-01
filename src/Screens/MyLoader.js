import React from 'react'
import loadingGif from '.././Assets/MyLoaderNoBackground.gif';
import './MyLoader.css'
function MyLoader() {
  return (
    <div id="loadingPage">
      <img id='loading' src={loadingGif} alt='loading'/>
    </div>
  )
}

export default MyLoader