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
            Launch your own Platform, <br /> in less than 5 minutes, <br /> for
            free!
          </h3>
          <button className="btn-bg">open app</button>
        </div>
        <div ref={container} className="footer2-child footer2-child2"></div>
      </div>
    </footer>
  );
};

export default Footer2;
