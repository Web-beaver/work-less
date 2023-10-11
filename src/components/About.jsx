import React from 'react';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
function About({ src1, src2 }) {
  const navigate = useNavigate();
  const showConnectBox = () => {
    if(window.innerWidth <= 600){
      navigate('/connect');
      return
    }
    const ele = document.getElementsByClassName("connect-card")[0];

    
    ele.classList.add("connect-box-animation");
  
  }
  return (
    <>
      <div id="about">
        <Fade direction="left" className='fadewidth' triggerOnce>
          <div id='card' >
            <img src={src1} height={220} width={220}alt="" />
            <div id="textabout">
              <h5>(ABout me)</h5>
              <p>I'm a dynamic full stack developer with extensive open source contributions, including project maintenance at AlphaVio Org and top-tier input to the Mirage UI frontend component library. Beyond coding, I indulge my passion for gaming, travel, and cuisine. Seamlessly blending technical prowess with a creative mindset, I offer unique perspectives to projects. Let's collaborate and turn your ideas into captivating digital experiences. "In code, each line narrates a story, and every project is an epic." Together, we'll script greatness.</p>
              <a onClick={()=>showConnectBox()}>Let's talk</a>
            </div>
          </div>
        </Fade>
      </div>
      { src2 &&
      <div id="about" className='toopp'>
        <Fade direction="left" className='fadewidth' triggerOnce>
          <div id='card'>
            <img src={src2} alt="" height={200} width={200}/>
            <div id="textabout">
              <h5>(ABout me)</h5>
              <p>I'm a dynamic full stack developer with extensive open source contributions, including project maintenance at AlphaVio Org and top-tier input to the Mirage UI frontend component library. Beyond coding, I indulge my passion for gaming, travel, and cuisine. Seamlessly blending technical prowess with a creative mindset, I offer unique perspectives to projects. Let's collaborate and turn your ideas into captivating digital experiences. "In code, each line narrates a story, and every project is an epic." Together, we'll script greatness.</p>
           <a onClick={()=>showConnectBox()} style={{padding:2,marginBottom:2}}>Let's talk</a>
            </div>
          </div>
        </Fade>
      </div>
      }
    </>
  )
}

export default About