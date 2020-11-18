import React, { useState, useRef, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import lottie from 'lottie-web';
import { Section } from 'react-scroll-section';

const Features = props => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lottie/features.json'),
    });
  }, []);

  return (
    <Section id="features">
      <div className="sm-container sm_section-spacing">
        <h2 className="features-title">features</h2>
        <div className="features-parent">
          <div className="features-child1">
            <div className="features-child1_column">
              <div className="features-child1_container">
                <div>
                  <Collapsible
                    open={isOpen1}
                    onOpening={() => {
                      setIsOpen1(true);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                    }}
                    triggerDisabled={isOpen1}
                    triggerOpenedClassName={
                      isOpen1
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Powerful Design Tools"
                  >
                    <p className="features-child1_p">
                      Bring your brand image to life using Platformpro’s
                      powerful and easy-to-use design tools. Customize
                      everything from text to colour in the same space. Use our
                      pre-built themes to jumpstart your design and create a
                      beautiful site in minutes.
                    </p>
                    <button className="btn-bg features-cta">start now</button>
                  </Collapsible>
                </div>
              </div>
              <div className="features-child1_container">
                <div>
                  <Collapsible
                    open={isOpen2}
                    onOpening={() => {
                      setIsOpen1(false);
                      setIsOpen2(true);
                      setIsOpen3(false);
                      setIsOpen4(false);
                    }}
                    triggerDisabled={isOpen2}
                    triggerOpenedClassName={
                      isOpen2
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Work on Desktop and Mobile"
                  >
                    <p className="features-child1_p">
                      Everyone from your audience is watching on a different
                      device, from phones, to Tv’s to desktop computers.
                      Websites you build on Platformpro will look stunning
                      anywhere your audience is, automatically.
                    </p>
                    <button className="btn-bg features-cta">start now</button>
                  </Collapsible>
                </div>
              </div>
              <div className="features-child1_container">
                <div>
                  <Collapsible
                    open={isOpen3}
                    onOpening={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(true);
                      setIsOpen4(false);
                    }}
                    triggerDisabled={isOpen3}
                    triggerOpenedClassName={
                      isOpen3
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Powerful Analytics"
                  >
                    <p className="features-child1_p">
                      Learn about your audience with in-depth analytics, from
                      watch time to page views, all in one place. Optimize your
                      content with data from every member of your audience, from
                      Twitter to Twitch.
                    </p>
                    <button className="btn-bg features-cta">start now</button>
                  </Collapsible>
                </div>
              </div>
              <div className="features-child1_container">
                <div>
                  <Collapsible
                    open={isOpen4}
                    onOpening={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(true);
                    }}
                    triggerDisabled={isOpen4}
                    triggerOpenedClassName={
                      isOpen4
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Everything and More"
                  >
                    <p className="features-child1_p">
                      Use Platformpro to help jumpstart your career. Look
                      professional whether you’re getting your first follower or
                      your first million. Platformpro sets you up for success
                      with tools that scale to any size.
                    </p>
                    <button className="btn-bg features-cta">start now</button>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
          <div className="features-child2" ref={container}></div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
