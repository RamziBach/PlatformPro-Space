import React, { useState, useEffect } from 'react';

const Backgrounds = props => {
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="backgrounds">
      <div className="bg-planet1"></div>
      <div className="bg-gas"></div>
      <div
        className="bg-stars"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      ></div>
      <div
        className="bg-stars2"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      ></div>
      <div
        className="bg-sm-planet"
        style={{
          transform: `translateY(${offSetY * 0.1}px)`,
          // transition: 'all .1s',
        }}
      ></div>
      <div
        className="bg-rocket"
        style={{ transform: `translateY(-${offSetY * 0.3}px)` }}
      ></div>
      <div
        className="bg-stars3"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      ></div>
      <div
        className="bg-stars4"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      ></div>
      {/* <div className="bg-stars5"></div> */}
      <div
        className="bg-stars6"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      ></div>
      <div className="bg-gas2"></div>
      {props.children}
    </div>
  );
};

export default Backgrounds;
