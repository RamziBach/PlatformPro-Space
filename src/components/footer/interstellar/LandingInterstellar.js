import React from 'react';

import circle1 from '../../../images/whiteInterstellar/circle-1.svg';
import circle2 from '../../../images/whiteInterstellar/circle-2.svg';
import circle3 from '../../../images/whiteInterstellar/circle-3.svg';
import circle4 from '../../../images/whiteInterstellar/circle-4.svg';
import circle5 from '../../../images/whiteInterstellar/circle-5.svg';
import circle6 from '../../../images/whiteInterstellar/circle-6.svg';
import circle7 from '../../../images/whiteInterstellar/circle-7.svg';
import circle8 from '../../../images/whiteInterstellar/circle-8.svg';
import circle9 from '../../../images/whiteInterstellar/circle-9.svg';
import circle10 from '../../../images/whiteInterstellar/circle-10.svg';

const LandingInterstellar = () => {
  return (
    <>
      <div className="landingInterstaller-hero">
        <div className="landingInterstellar-child">
          <div className="circles">
            <div className="circles-container">
              <div className="circle">
                <img className="rotating-30" src={circle1} alt="circle" />
              </div>
              <div className="circle">
                <img className="rotating-50" src={circle2} alt="circle" />
              </div>
              <div className="circle2">
                <img className="rotating-70" src={circle3} alt="circle" />
              </div>
              <div className="circle2">
                <img className="rotating-40" src={circle4} alt="circle" />
              </div>
              <div className="circle3">
                <img className="rotating-70" src={circle5} alt="circle" />
              </div>
              <div className="circle3">
                <img className="rotating-30" src={circle6} alt="circle" />
              </div>
              <div className="circle4">
                <img className="rotating-50" src={circle7} alt="circle" />
              </div>
              <div className="circle4">
                <img className="rotating-40" src={circle8} alt="circle" />
              </div>
              <div className="circle5">
                <img className="rotating-100" src={circle9} alt="circle" />
              </div>
              <div className="circle5">
                <img className="rotating-70" src={circle10} alt="circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingInterstellar;
