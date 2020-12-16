import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Footer2 = () => {
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
      <div className="bg-footer-planet2"></div>
      <div className="footer2-parent">
        <div className="footer2-child footer2-child1">
          <h3 className="footer2-title">
            To register for the beta, <br /> click button
          </h3>
          <a
            href="https://platformpro.tv/beta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bg"
          >
            Register
          </a>
        </div>
        <div ref={container} className="footer2-child footer2-child2"></div>
      </div>
    </footer>
  );
};

export default Footer2;
