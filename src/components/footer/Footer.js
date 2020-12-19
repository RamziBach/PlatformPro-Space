import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Footer = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/footer.json'),
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-parent">
        <div className="footer-child1">
          <div>
            <h2 className="footer-title">
              Register, <br /> for the beta!
            </h2>
            <a
              href="https://platformpro.surveysparrow.com/s/beta/tt-b7a7f5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bg"
            >
              register to beta
            </a>
          </div>
          <div className="footer-socials-btn-container">
            <a
              href="https://discord.gg/pgYBg8n"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-socials-btn"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://www.twitch.tv/platformprotv"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-socials-btn"
            >
              <i className="fab fa-twitch"></i>
            </a>
            <a
              href="https://twitter.com/PlatformProTV"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-socials-btn"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://www.instagram.com/platformprotv"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-socials-btn"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-child2" ref={container}></div>
      </div>
    </footer>
  );
};

export default Footer;
