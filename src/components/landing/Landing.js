import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import logo from '../../images/light-logo_sm.svg';

const Landing = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/landing.json'),
    });
  }, []);

  return (
    <div className="sm-container sm_section-spacing">
      <div className="landing-parent">
        <div className="title-container">
          <img className="landing-logo" src={logo} alt="logo" />
          <h2 className="landing-title">
            The web <br /> design platform <br /> for content creators.
          </h2>
          <p className="landing-p">
            Whether you’re brand new or breaking into the top 10, our tools and
            services will help make streaming your main source of income. We’ll
            help you, grow, manage and monetize your brand to make a living
            doing what you love.
          </p>
          <a
            href="https://platformpro.surveysparrow.com/s/beta/tt-b7a7f5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-border"
          >
            get started
          </a>
        </div>
        <div className="landing-illustration" ref={container}></div>
      </div>
    </div>
  );
};

export default Landing;
