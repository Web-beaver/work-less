import React from 'react'
import video from "../components/kpo.mp4";
import "../App.css"
function Video1() {
    return (
        <div className="three_3d">
            <video src={video} autoPlay loop muted></video>
        </div>
    )
}

export default Video1