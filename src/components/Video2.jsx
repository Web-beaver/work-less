import React from 'react'
import hibye from '../components/hibye.mp4'
import "../App.css"
function Video2() {
  return (
    <div className="three_3d">
        <video src={hibye} autoPlay loop muted className='hibye'></video>
    </div>
  )
}

export default Video2;