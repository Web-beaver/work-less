import React, { useEffect } from 'react';
import './exp.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
import "./testimonial.css";
import Splide from '@splidejs/splide';
function Exper() {

  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);

  }
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      direction: 'ltr',
      width: '72%',
      height: '36rem',
      autoplay: true,
      arrows: false,
      pagination:false,
      perPage: 1,
      breakpoints: {
        1100: {
          height: '40rem',
          width: '90%'
        },
        720: {
          height: '46rem',
          width: '100%'
        }
      },
    });
    splide.mount();
  }, []);
  return (
    <>

      <div className="wro">
        <div className="box">
          <div className="expe">

            <div className="word">SANYAM</div>
            <main class="CV-page">
              <div class="CV-grid">
                <div class="CV-grid-column">
                  <div class="CV-jobs">
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Creative Technologist Co-op </span>&#8211; <span class="CV-timeline-heading-location">Mullen Lowe U.S. </span><small class="CV-timeline-heading-duration">July 2015 - Present</small></h3>
                      <ul class="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li class="CV-job-timeline-item">Developed and maintained code for in-house and client websites utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.</li>
                          <li class="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
                          <li class="CV-job-timeline-item">Coordinated closely with other developers and digital producers to expedite projects.</li>
                          <li class="CV-job-timeline-item">Clients included Lovesac, U.S. Cellular, JetBlue, and more.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Research Assistant </span>&#8211; <span class="CV-timeline-heading-location">NU College of Computer and Information Science</span><small class="CV-timeline-heading-duration">March 2015 - April 2015</small></h3>
                      <ul class="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li class="CV-job-timeline-item">Developed and maintained code for in-house and client websites utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.</li>
                          <li class="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
                          <li class="CV-job-timeline-item">Coordinated closely with other developers and digital producers to expedite projects.</li>
                          <li class="CV-job-timeline-item">Clients included Lovesac, U.S. Cellular, JetBlue, and more.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Research Assistant </span>&#8211; <span class="CV-timeline-heading-location">NU College of Computer and Information Science</span><small class="CV-timeline-heading-duration">March 2015 - April 2015</small></h3>
                      <ul class="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li class="CV-job-timeline-item">Developed and maintained code for in-house and client websites utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.</li>
                          <li class="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
                          <li class="CV-job-timeline-item">Coordinated closely with other developers and digital producers to expedite projects.</li>
                          <li class="CV-job-timeline-item">Clients included Lovesac, U.S. Cellular, JetBlue, and more.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="primary" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <section class="container-testi">
            <div class="section" id="testimonials">
              <div class="section__header section__header--center">
                <h2 class="section__title">People Says</h2>
                <p class="section__subtitle">What others think about me</p>
              </div>
              <div class="testimonials">
                <div class="splide">
                  <div class="splide__track">
                    <div class="splide__list">
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🤝 As a team player, Ishan excels in collaboration. Their open communication style, willingness to share insights, and eagerness to contribute ideas have fostered an environment of creativity and growth within our team. They have a knack for translating complex technical jargon into understandable terms, making them an invaluable bridge between developers and non-technical stakeholders.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Sanaula Haq</h4>
                              <p>Assistant Vice President, Digital Bank of Singapore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🌐 Ishan's projects bear testimony to their commitment to delivering excellence. Whether it's architecting robust server-side systems, optimizing performance for scalability, or conceptualizing user-centric features, their contributions consistently exceed expectations.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Tanvi Aggarwal</h4>
                              <p>Principal Software Enginner,MBRDI</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🚀 Ishan's impact is truly transformative. Mentees under their guidance have not only gained a solid foundation in DSA but have also developed a mindset of analytical thinking and strategic problem-solving that extends far beyond the realm of algorithms.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Bittu Aggarwal</h4>
                              <p>Academic Head and Counsellor,Geekster</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <Menu></Menu>


        </div>
        <div className="next-work">
          <span id="nword">Next</span>
          <div className="elem" onClick={() => { navigateHandler('/projects'); }}>
            <h1>WORK</h1>
            <h2>+</h2>
            <div className="center14"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exper
